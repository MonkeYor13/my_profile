import { View, Text, Image, SafeAreaView, StatusBar, } from 'react-native'

const logo = require('../assets/logos/logo.png')

export default function Home() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View className={'items-center mt-4'}>
        <Image source={logo} />
      </View>
    </SafeAreaView>
  )
}

