import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import Wellcome from "./screens/Wellcome";
import SignUp from "./screens/SignUp";
// const Drawer = createDrawerNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:"#38a4c8"},
          headerTintColor:'white',
          DrawerActiveTintColor:'#38a4c8',
          drawerActiveBackgroundColor:"#98dcfe"
        }}
      >
        <Drawer.Screen
          name="Wellcome"
          component={Wellcome}
          options={{
            tabBarIcon:({color,size} )=> ( <Ionicons name="home" color={color} size={size}/> )
          }}
        />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
      {/* <Drawer.Screen name='Wellcome' component={Wellcome}/>
    <BottomTab.Screen name='SignUp' component={SignUp}/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
