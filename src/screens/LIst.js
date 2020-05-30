import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';

const List = () => {
	const list = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6", "Menu 7", "Menu 8", "Menu 9", "Menu 10", "Menu 11"]
	return <View>

		<FlatList
			data={list}
			keyExtractor={(temp) => temp}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={(element) => <Text style={style.text}>{element.item}</Text>} />
		<FlatList data={list} keyExtractor={(temp) => temp} showsVerticalScrollIndicator={true} renderItem={({ item }) => <Text style={style.text}>{item}</Text>} />
	</View>
}

const style = StyleSheet.create({
	text: {
		textAlign: "center",
		marginVertical: 10,
		padding: 10,
		backgroundColor: "black",
		color: "white",
		margin: 2
	}
})

export default List;