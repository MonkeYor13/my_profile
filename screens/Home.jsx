import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, Platform, ImageBackground, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SectionHome from '../components/SectionHome';
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

    <SafeAreaView style={styles.container} className='bg-bg_primary'>
      <StatusBar style='auto' />
      <ScrollView>
       <SectionHome/>
      </ScrollView>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },

})













