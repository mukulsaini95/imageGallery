import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetails from "./components/ImageDetails"
const Images = () => {
	let images = [
		{ title: "iron man", src: "../../assets/img1.jpg" },
		{ title: "joker", src: "../../assets/img2.jpg" },
		{ title: "micky mouse", src: "../../assets/img3.jpg" },
		{ title: "dog", src: "../../assets/img4.jpg" },
	]
	return <View>
		{images.map((temp, index) => {
			return <ImageDetails image={require("../../assets/img1.jpg")} title={temp.title} key={index} />
		})}
	</View>
}

const style = StyleSheet.create({

})

export default Images;