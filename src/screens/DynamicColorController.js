import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native"
import ColorContainer from "./components/ColorContainer"
const IncreaseDecreaseVariable = 5
const DynamicColorController = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case "red":
			case "green":
			case "blue":
				return (state[action.type] + action.payload > 255 || state[action.type] + action.payload < 0) ?
					state
					:
					{ ...state, [action.type]: state[action.type] + action.payload }
			default:
				return state
		}
	}
	const initialState = {
		red: 0,
		green: 0,
		blue: 0
	}
	const colors = [
		{ title: "RED", key: "red" },
		{ title: "GREEN", key: "green" },
		{ title: "BLUE", key: "blue" }
	]
	const [state, dispatch] = useReducer(reducer, initialState)
	const { red, blue, green } = state

	return <View>
		<FlatList keyExtractor={(item) => item.key} data={colors} renderItem={({ item }) => {
			return <ColorContainer title={item.title} value={state[item.key]} increase={() => dispatch({ type: item.key, payload: IncreaseDecreaseVariable })} decrease={() => dispatch({ type: item.key, payload: - IncreaseDecreaseVariable })} />
		}} />
		<View style={{ height: 1000, width: 1000, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
	</View >
}

const styles = StyleSheet.create({


})

export default DynamicColorController;