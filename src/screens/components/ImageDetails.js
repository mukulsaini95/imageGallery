import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";

const ImageDetails = (props) => {
	console.log('props: ', props);
	return <View>
		<Image source={props.image}  style={{width: 300,height:200,backgroundColor:"red"}}/>
		<Text style={style.text}>{props.title}</Text>
		</View>
}


const style = StyleSheet.create({
	text: {
		fontSize: 20
	}
})


export default ImageDetails;