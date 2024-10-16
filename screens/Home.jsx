import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, Platform, ImageBackground, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const logo = require('../assets/logos/logo.png')
const bgHome = require('../assets/backgrounds/bg-home.png')

export default function Home() {
  const opneLinkedIn = () => {
    const url = 'https://www.linkedin.com/in/yorvisjesusrodriguez13/';
    Linking.openURL(url).catch((err) => console.error("No se pudo abrir el enlace:", err));
  };
  const opneX = () => {
    const url = 'https://x.com/YorMonke';
    Linking.openURL(url).catch((err) => console.error("No se pudo abrir el enlace:", err));
  };
  const opneGitHub = () => {
    const url = 'https://github.com/MonkeYor13';
    Linking.openURL(url).catch((err) => console.error("No se pudo abrir el enlace:", err));
  };
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <View style={styles.cont1}>
        <Image source={logo} className={'self-center'} />
        <Text className={'text-4xl font-bold text-lightgrey text-right'}>Mobile{'\n'}Developer</Text>
      </View>

      <ImageBackground source={bgHome} style={styles.cont2} >

        <View style={styles.contSocialmedia}>
          <Text className='text-2xl font-bold text-lightgrey text-right p-2'>Design{'\n'}Anywhere</Text>
          <Text className='text-sm text-lightgrey text-right px-1'>Introducing myself to the World of Design an’ in a underground way, applying my creativity with love for Hip Hop music an’ creativity, I just apply my performance in new projects of different generations an’ in a professional way. This is me now! </Text>
          <View className='flex-row'>

            <TouchableOpacity className='rounded-full bg-orangeApp w-12 h-12 justify-center items-center mt-2'
              onPress={opneLinkedIn}
            >
              <Ionicons name="logo-linkedin" size={24} color="#E7E7E7" />
            </TouchableOpacity>

            <View className='flex-row w-full justify-evenly mt-2'>
              <TouchableOpacity className='rounded-full w-12 h-12 justify-center items-center'
                onPress={opneX}
              >
                <FontAwesome6 name="x-twitter" size={24} color="#E7E7E7" />
              </TouchableOpacity>

              <View className='rounded-full  w-12 h-12 justify-center items-center'>
                <Ionicons name="logo-behance" size={24} color="#E7E7E7" />
              </View>

              <TouchableOpacity className='rounded-full  w-12 h-12 justify-center items-center'
                onPress={opneGitHub}
              >
                <Ionicons name="logo-github" size={24} color="#E7E7E7" />
              </TouchableOpacity>

            </View>
          </View>
        </View>


        <View style={styles.title2}>
          <Text className={'text-4xl font-bold text-lightgrey text-right mb-2'}>UX / UI{'\n'}Designer</Text>
        </View>
      </ImageBackground>

    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16
  },
  cont1: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'space-evenly'
  },
  cont2: {
    flex: 2,
  },
  contSocialmedia: {
    flex: 2,
    //backgroundColor: 'green',
    justifyContent: ''
  },
  title2: {
    //flex: 1,
    justifyContent: 'flex-end'
  }
})













