import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native"

const ColorContainer = ({ title, increase, decrease, value }) => {
	return <View style={{ borderColor: "red", paddingBottom: 20, paddingTop: 20, paddingLeft: 30, paddingRight: 30 }}>
		<Button style={styles.button} onPress={() => increase()} title="Increase"></Button>
		<Button onPress={() => decrease()} title="Decrease"></Button>
		<Text style={styles.text}> {title}:{value}</Text>
	</View>
}

const styles = StyleSheet.create({
	text: {
		textAlign: "center",
		fontSize: 20,
		padding: 10
	},
	button: {
		width: 500
	}
})

export default ColorContainer;