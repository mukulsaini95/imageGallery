import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button, FlatList, StatusBar, Image, Dimensions, TouchableHighlight, ImageBackground, ScrollView } from "react-native"
import MapView, { Marker } from 'react-native-maps';
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';



const MapComponent = ({ navigation }) => {
	const markers = [
		{ latlng: { latitude: 28.498064, longitude: 77.239395 }, title: "Click Me", description: "Please Click Me :)" }
	]
	let images = [
		{ title: "iron man", src: "../../assets/img1.jpg" },
		{ title: "joker", src: "../../assets/img2.jpg" },
		{ title: "micky mouse", src: "../../assets/img3.jpg" },
		{ title: "dog", src: "../../assets/img4.jpg" },
	]
	return <View style={{ flex: 1 }}>
		<StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />

		<View style={{ flex: .4, borderWidth: 2 }}>
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 28.498064,
					longitude: 77.239395,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			//   onRegionChange={this.onRegionChange}
			>
				{markers.map(marker => (
					<Marker
						onPress={() => { navigation.navigate('Gallery') }}
						centerOffset={{ x: -42, y: -60 }}
						anchor={{ x: 0.84, y: 1 }}
						coordinate={marker.latlng}
						title={marker.title}
						description={marker.description}
					>
						<Image source={require('../../assets/cake.jpg')} style={{ height: 35, width: 35 }} />

					</Marker>
				))}
			</MapView>
		</View >

		<ScrollView style={{ flex: .60 }}>
			{/* <ImageBackground style={styles.backgroundImage} source={require('../../assets/bgSecond.jpg')} > */}


			{/* <Text
				style={{
					padding: 16,
					fontSize: 20,
					color: 'white',
					backgroundColor: '#205a73',
				}}>
				Image Gallery
	</Text> */}
			<View style={{ marginTop: 0 }}>
				<LinearGradient
					colors={["#2b5876", "#4e4376"]}
					style={{
						width,
					}}
				>
					<Text style={{
						color: "white", fontSize: 14, padding: 10, fontWeight: "200"
					}}>
						Iron Man (2008)</Text>
				</LinearGradient>
				<View style={{ borderWidth: 1, flexDirection: "row" }}>
					<View style={{ flex: .5 }}>

						<Image source={require('../../assets/img1.jpg')} style={styles.imgBackground}></Image>
					</View>
					<View style={{ flex: .5 }}>
						<Text style={{ padding: 10, margin: 20,textAlign:"justify",fontSize:16 }}>Iron Man is a 2008 American superhero . </Text>
					</View>
				</View>
			</View>
			<View>
				<LinearGradient
					colors={["#2b5876", "#4e4376"]}
					style={{
						width,
					}}
				>
					<Text style={{
						color: "white", fontSize: 14, padding: 10, fontWeight: "200"
					}}>
						Joker</Text>
				</LinearGradient>
				<View style={{ borderWidth: 1, flexDirection: "row" }}>
					<View style={{ flex: .5 }}>

						<Image source={require('../../assets/img2.jpg')} style={styles.imgBackground}></Image>
					</View>
					<View style={{ flex: .5 }}>
						<Text style={{ padding: 10, margin: 20,textAlign:"justify",fontSize:16 }}>Forever alone in a crowd.  </Text>
					</View>
				</View>
			</View>
			<View>
				<LinearGradient
					colors={["#2b5876", "#4e4376"]}
					style={{
						width,
					}}
				>
					<Text style={{
						color: "white", fontSize: 14, padding: 10, fontWeight: "200"
					}}>
						The bud brings flood of happiness...</Text>
				</LinearGradient>
				<View style={{ borderWidth: 1, flexDirection: "row" }}>
					<View style={{ flex: .5 }}>

						<Image source={require('../../assets/img3.jpg')} style={styles.imgBackground}></Image>
					</View>
					<View style={{ flex: .5 }}>
						<Text style={{ padding: 10, margin: 20,textAlign:"justify",fontSize:16  }}>The term happiness is used in the context of mental or emotional states. </Text>
					</View>
				</View>
			</View>	

			{/* </ImageBackground> */}
		</ScrollView>
	</View>
}

const styles = StyleSheet.create({
	backgroundImage: {
		// flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: "center",
		alignItems: "center",
		resizeMode: "contain",
		opacity: 0.7
	},
	wrapper: {
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: '#9D	D6EB'
	},
	slide2: {
		// flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
		width: 200
	},
	imgBackground: {
		width: 180,
		margin: 10,
		height: 150,
		backgroundColor: 'transparent',
		// position: 'absolute',
		resizeMode: 'contain',
	},
})

export default MapComponent;