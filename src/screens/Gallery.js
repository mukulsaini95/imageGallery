import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button, StatusBar, TouchableOpacity, FlatList, Image, Dimensions, TouchableHighlight, ImageBackground } from "react-native"
import MapView, { Marker } from 'react-native-maps';
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

import FastImage from 'react-native-fast-image'

const Gallery = ({ navigation }) => {
	const markers = [
		{ latlng: { latitude: 28.498064, longitude: 77.239395 }, title: "Click Me", description: "Please Click Me :)" }
	]
	let images = [
		{ title: "iron man", src: require("../../assets/slider/1.jpg") },
		{ title: "iron man", src: require("../../assets/slider/4.jpg") },
		{ title: "iron man", src: require("../../assets/slider/7.jpg") },
		{ title: "iron man", src: require("../../assets/slider/12.jpg") },
		{ title: "iron man", src: require("../../assets/slider/13.jpg") },
		{ title: "iron man", src: require("../../assets/slider/16.jpg") },
		{ title: "iron man", src: require("../../assets/slider/18.jpg") },
		{ title: "iron man", src: require("../../assets/slider/19.jpg") },
		{ title: "iron man", src: require("../../assets/slider/21.jpg") },
	]
	return <View style={styles.container}>
		<StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />

		<View style={{ flex: .34 }}>

			<Swiper autoplay>
				{images.map(({ src }, index) => (
					<View style={{ flex: 1 }} key={index}>
						<Image source={src} style={styles.imgBackground}></Image>
					</View>
				))}
			</Swiper>
		</View>

		<View style={{ flex: .66 }}>

			<FlatList
				data={images}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }, index) => {
					return <ImageBackground source={item.src} style={{ flex: .35, height: 150, margin: 2 }}>
																										{/* <Text
																										style={{
																											fontWeight: 'bold',
																											color: 'white',
																											position: 'absolute', // child
																											top: 0, left: 0, right: 0, bottom: 0,justifyContent: 'center', alignItems: 'center'
																											// top: 0, // position where you want
																											// left: 0,
																										}}
																									>
																						</Text> */}
		  </ImageBackground>
				}}
				numColumns={3}></FlatList>
		</View>
	</View>
}

const styles = StyleSheet.create({

	imgBackground: {
		top: 0,
		bottom: 0,
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		resizeMode: 'contain',
	},
	container: {
		flex: 1,
	},
	image: {
		height: 120,
		width: '100%',
	},
	fullImageStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '98%',
		resizeMode: 'contain',
	},
	modelStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.4)',
	},
	closeButtonStyle: {
		width: 25,
		height: 25,
		top: 9,
		right: 9,
		position: 'absolute',
	},
})

export default Gallery;