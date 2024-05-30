import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import Home from '../src/screens/Home'
import Login from '../src/screens/Login'
import CreateUser from '../src/screens/CreateUser'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />

        <Stack.Screen name="CreateUser" component={CreateUser} options={{ headerShown: false}} />



      </Stack.Navigator>
  );
}