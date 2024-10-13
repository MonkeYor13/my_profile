import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, Platform, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const logo = require('../assets/logos/logo.png')
const bgHome = require('../assets/backgrounds/bg-home.png')

export default function Home() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.setcion}>
        <View style={styles.box}>
          <Text>box 1</Text>
        </View>

        <ImageBackground source={bgHome} style={{ flex: 1 }} >
          <Text className={'text-4xl font-bold text-lightgrey text-right'}>UX & UI{'\n'}Designer</Text>
        </ImageBackground>
      </View>


    </SafeAreaView >
  )
}


//   {/* LOGOTYPE */}
//   <View style={{}} className='justify-center mt-6'>
//   <Image source={logo} className={'self-center'} />
// </View>

//   {/* TITLE ONE */}
//   <View style={{ flex: 1 }} className='justify-center'>
//   <Text className={'text-4xl font-bold text-lightgrey text-right'}>Mobile{'\n'}Developer</Text>
// </View>

//   {/* CENTER-CARD  */}
//   <View style={{ flex: 0 }} className=''>
//   <LinearGradient
//     colors={['#f15a24', '#010101']}
//     locations={[0, 0.5, 1]}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 1 }}
//     style={{}}
//     className='rounded-3xl justify-between'
//   >
//     <Text className='text-2xl font-bold text-lightgrey text-right p-2'>Design{'\n'}Anywhere</Text>
//     <Text className='text-base text-lightgrey text-right px-1'>Introducing myself to the World of Design an’ in a underground way, applying my creativity with love for Hip Hop music an’ creativity, I just apply my performance in new projects of different generations an’ in a professional way. This is me now! </Text>
//     <View className='flex-row'>
//       <View className='rounded-full bg-darkgrey w-12 h-12 justify-center items-center'>
//         <Ionicons name="logo-linkedin" size={24} color="#E7E7E7" />
//       </View>
//       <View className='flex-row w-full justify-evenly'>
//         <View className='rounded-full w-12 h-12 justify-center items-center'>
//           <FontAwesome6 name="x-twitter" size={24} color="#E7E7E7" />
//         </View>
//         <View className='rounded-full  w-12 h-12 justify-center items-center'>
//           <Ionicons name="logo-behance" size={24} color="#E7E7E7" />
//         </View>
//         <View className='rounded-full  w-12 h-12 justify-center items-center'>
//           <Ionicons name="logo-github" size={24} color="#E7E7E7" />
//         </View>
//       </View>
//     </View>
//   </LinearGradient>
// </View>

//   {/* TITLE TWO */}
//   <View style={{ flex: 1 }} className='justify-center'>
//   <Text className={'text-4xl font-bold text-lightgrey text-right'}>UX & UI{'\n'}Designer</Text>
// </View>








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  setcion: {
    flex: 1,
    backgroundColor: 'green'
  },
  box: {
    flex: 1,
    backgroundColor: 'blue'
  },
  box2: {
    flex: 1,
    backgroundColor: 'pink'
  },

})




