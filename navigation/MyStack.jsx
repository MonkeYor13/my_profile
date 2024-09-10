import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MySkills from '../screens/MySkills'
import MyHobbies from '../screens/MyHobbies'
import MyTab from './MyTab';

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home" 
      screenOptions={{
        headerStyle: {backgroundColor: '#010101'},
      }}
    >
      <Stack.Screen name='Home' component={MyTab} 
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen name='Skills' component={MySkills} />
      <Stack.Screen name='Hobbies' component={MyHobbies} />
    </Stack.Navigator>
  )
}