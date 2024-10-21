import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function SectionHome() {
  return (
    <View>
      <View className="bg-red-200">
        <Text className="text-orangeApp text-xl font-inter font-bold">©MONKE{'\n'}YOR</Text>
      </View>
      <View className="bg-red-200">

        <Text>I develop custom mobile applications with cutting-edge UX/UI designs that optimize your business.</Text>
      </View>
      <View className="bg-red-200">
        <Text>About Me</Text>
        <Text>Creativity that impacts. Applications that connect.</Text>
        <Text>We are passionate about creating meaningful brands and dynamic websites that stand out in today’s competitive market. Our team combines strategic thinking with creative design to craft custom solutions that align with your business goals. From developing a unique brand identity to designing intuitive, responsive websites, we focus on delivering experiences that engage and convert.

          With every project, we ensure that your brand’s story is told in a way that resonates with your audience, builds trust, and drives growth. Let us help you transform your brand and take your digital presence to the next level.</Text>

      </View>
      <View className="bg-red-200">
        <Text>Companies where I have worked</Text>
        {/* iconos de companias */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})