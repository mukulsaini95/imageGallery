
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import AboutUs from "./src/screens/AboutUs"
import List from "./src/screens/LIst"
import Images from "./src/screens/Images"
import AddColors from "./src/screens/AddColors";
import DynamicColorController from "./src/screens/DynamicColorController";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import MapComoponent from "./src/screens/MapComoponent";
import Gallery from "./src/screens/Gallery";

const navigator = createStackNavigator(
  {
    Home:  {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    } ,
    About:  {
      screen: AboutUs,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        // headerStyle: styles.headerStyle,
        headerTitle: <Text>AboutUs</Text>,
        headerLeft : null,
        headerRight: null,
      })
    },
    List: List,
    Images:Images,
    DynamicColorController:DynamicColorController,
    AddColors:AddColors,
    TextScreen:TextScreen,
    BoxScreen:BoxScreen,
    Gallery:{
      screen: Gallery,
      navigationOptions: {
        header: null,
      }
    } ,
    MapComoponent:{
      screen: MapComoponent,
      navigationOptions: {
        header: null,
      }
    } 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Mr. Bug"
    }
  },
  {headerMode: 'none'}
);

export default createAppContainer(navigator);

