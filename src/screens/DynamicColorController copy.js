import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native"
import ColorContainer from "./components/ColorContainer"
const DynamicColorController = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		switch (color) {
			case "red":
				red + change > 255 || red + change < 0 ? null : setRed(red + change);
				return;
			case "green":
				green + change > 255 || green + change < 0 ? null : setGreen(green + change);
				return;
			case "blue":
				blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
				return;
		}
	}
	return <View>
		<ColorContainer title="RED" value={red} increase={() => setColor("red", 10)} decrease={() => setColor("red", - 10)} />
		<ColorContainer title="GREEN" value={green} increase={() => setColor("green", 10)} decrease={() => setColor("green", - 10)} />
		<ColorContainer title="BLUE" value={blue} increase={() => setColor("blue", 10)} decrease={() => setColor("blue", - 10)} />
		<View style={{ height: 1000, width: 1000, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
	</View>
}

const styles = StyleSheet.create({


})

export default DynamicColorController;