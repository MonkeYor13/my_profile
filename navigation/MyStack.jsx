import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MyTab from './MyTab';

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name='Home' component={MyTab}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}