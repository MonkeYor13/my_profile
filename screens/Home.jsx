import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const logo = require('../assets/logos/logo.png')
const cardHome = require('../assets/backgrounds/card-home.png')

export default function Home() {
  return (
    <View style={styles.container}>

      <View className='flex justify-center'>
        <Image source={logo} className={'self-center'} />
      </View>

      <View className='justify-center basis-1/4'>
        <Text className={'text-5xl font-bold text-Lightgrey text-right'}>Mobile{'\n'}Developer</Text>
      </View>

      <View style={{ backgroundColor: 'white', height: 100, flex: 5 }}>

  
      </View>


      <View className='justify-center basis-1/4'>
        <Text className={'text-5xl font-bold text-Lightgrey text-right'}>UX & UI{'\n'}Designer</Text>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16
  },


})




