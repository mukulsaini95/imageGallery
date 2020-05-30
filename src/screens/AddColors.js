import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native"

const AddColors = () => {
	const [colors, setColors] = useState([])
	return <View>
		<Button onPress={() => {
			setColors([...colors, rgbRandom()])
		}} title="Add New Color"></Button>
		<FlatList
			keyExtractor={(item) => item}
			data={colors}
			renderItem={({ item }) => {
				console.log('item: ', item);
				return <View style={{ height: 50, flex: .8, backgroundColor: item }} />
			}}
		></FlatList>
	</View>
}

const styles = StyleSheet.create({


})

const rgbRandom = () => {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return `rgb(${red},${green},${blue})`
}

export default AddColors;