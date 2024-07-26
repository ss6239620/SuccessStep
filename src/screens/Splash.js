import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { colorTheme } from '../constant';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(async () => {
        navigation.navigate('GetStarted')
    }, 4000);
  }, [])

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lottie/splash.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.lightappBackGroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
})