import Home from '../src/screens/Home'
import Login from '../src/screens/Login'
import CreateUser from '../src/screens/CreateUser'
import Schedule from '../src/screens/Schedule'
import NewSchedule from '../src/screens/NewSchedule'
import EditSchedule from '../src/screens/EditSchedule'
import Menu from '../src/screens/Menu'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        
      }}
      >
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />

        <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Voltar'}} />

        <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false}} />

        <Stack.Screen name="NewSchedule" component={NewSchedule} options={{ title: 'Voltar'}}/>

        <Stack.Screen name="EditSchedule" component={EditSchedule} options={{ title: 'Voltar'}} />

        

      </Stack.Navigator>
  );
}

function Tabs() {
  return (
      <Tab.Navigator
          screenOptions={{
              tabBarActiveTintColor: "#000", //Cor de ícones ativos
              tabBarInactiveTintColor: "#000", //Cor de ícones inativos
              tabBarActiveBackgroundColor: '#61472E',
              tabBarShowLabel: false,
              tabBarStyle: { backgroundColor: '#D9D9D9',
                height: 70,
              },
              headerShown: false,
              
          }}
      >
          <Tab.Screen name="Meus Agendamentos" component={Schedule}
              options={{
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="calendar-check-outline" color={color} size={32} />
                  ),
              }}
          />
          <Tab.Screen name="Menu" component={Menu}
              options={{
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="menu" color={color} size={32} />
                  ),
              }}
          />
      </Tab.Navigator>
  );
}