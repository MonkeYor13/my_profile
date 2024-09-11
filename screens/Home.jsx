import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'


const logo = require('../assets/logos/logo.png')

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView className={'bg-background'} style={styles.safeArea} >
        <View className={'mx-4'}>
          <Image source={logo} className={'self-center'} />
          <View className={'bg-red-300'}>
            <Text className={'text-4xl font-bold text-Lightgrey text-right'}>Mobile{'\n'}Developer</Text>
            <Image source={logo} />
            <Text className={'text-4xl font-bold text-Lightgrey text-right'}>UX & UI{'\n'}Designer</Text>
          </View>
          <StatusBar style='auto' />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
})




