import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList, StatusBar, ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
  const menus = [
    { name: "List", component: 'List' },
    { name: "Images", component: 'Images' },
    { name: "Add Colors", component: 'AddColors' },
    { name: "Dynamic Color Controller", component: 'DynamicColorController' },
    { name: "Text Screen", component: 'TextScreen' },
    { name: "Box Screen", component: 'BoxScreen' },
    { name: "Map Comoponent", component: 'MapComoponent' },
  ]
  return <View style={styles.HomeScreen}>
    <StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />
    <ImageBackground style={styles.backgroundImage} source={require('../../assets/img12.jpg')} >

      {/* <FlatList
        keyExtractor={(item) => item.component}
        data={menus}
        renderItem={({ item }) => {
          return <View style={styles.view}>
            <Button style={styles.Button} onPress={() => { navigation.navigate(item.component) }} title={item.name} />

          </View>
        }}
      /> */}
      <TouchableOpacity onPress={() => { navigation.navigate("MapComoponent") }}>

        <Text style={styles.text}>Get Start</Text>

      </TouchableOpacity>

      {/* <Button style={styles.Button} onPress={() => { navigation.navigate("MapComoponent") }} title={"Let starts"} /> */}
    </ImageBackground>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    position: 'relative',
    bottom: 0,
    marginHorizontal:100,
    marginTop:520,
    justifyContent: "center",
    borderColor:"black",
    borderWidth:2,
    borderRadius:60,
    padding:20,
    backgroundColor:"black",
    opacity:.9,
    color:'white',
    width:350,
    textAlign:'center'
  },
  Button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  view: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  HomeScreen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#FFEB3B"
  },
  backgroundImage: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
  }
});

export default HomeScreen;
