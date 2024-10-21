import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

//import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();


export default function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyHome" component={Home} options={{ headerShown: false, tabBarLabel: 'Home' }} />

    </Tab.Navigator>
  )
}

