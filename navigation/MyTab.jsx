import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MyHobbies from "../screens/MyHobbies";
import MySkills from "../screens/MySkills";
//import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();


export default function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyHome" component={Home} options={{ headerShown: false, tabBarLabel: 'Home' }}
      />
      <Tab.Screen name="Skills" component={MySkills} options={{ headerShown: false }} />
      <Tab.Screen name="Hobbies" component={MyHobbies} options={{ headerShown: false }} />
      <Tab.Screen name="Download" component={MyHobbies} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}