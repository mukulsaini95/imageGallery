import React, { useReducer, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native'

const TextScreen = () => {
	const [text, setText] = useState("")
	return <View>
		<TextInput style={style.input} onChangeText={(newValue) => setText(newValue)} value={text} autoCapitalize="none" autoCorrect={false} />
		<Text>  Entered text  : {text}</Text>
	</View>
}


const style = StyleSheet.create({
	input: {
		borderColor: "red",
		borderWidth: 2,
		borderRadius: 5,
		margin: 20,
		textAlign: "center",
	}
})

export default TextScreen;