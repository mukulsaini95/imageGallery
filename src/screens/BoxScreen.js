import React, { useReducer, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native'

const BoxScreen = () => {
	return <View style={style.view}>
		<Text style={style.text}>  child 1</Text>
		<Text style={style.text2}>  child 2</Text>
		<Text style={style.text}>  child 3</Text>
	</View>
}


const style = StyleSheet.create({
	view: {
		borderWidth: 3,
		borderColor: "black",
		alignItems: "flex-start",
		flexDirection: "column",
		height: 300,
		alignItems: "stretch",
		justifyContent: 'space-evenly'
	},
	text: {
		borderWidth: 2,
		borderColor: "red",
		marginVertical: 20,
		marginHorizontal: 10,
		// paddingVertical:10,
		// paddingHorizontal:50,
		textAlign: 'center',
	},
	text2: function() {
		return {
			...this.text,
			alignSelf: "flex-start",
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			...StyleSheet.absoluteFillObject
		}
	  }
})

export default BoxScreen;