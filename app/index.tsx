import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import Home from '../src/screens/Home'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        
      }}
      >

        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />



      </Stack.Navigator>
  );
}
