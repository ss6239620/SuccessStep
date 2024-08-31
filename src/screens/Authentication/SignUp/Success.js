import { StyleSheet, Text, View, StatusBar, useColorScheme } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { colorTheme } from '../../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../../components/Header';
import LottieView from 'lottie-react-native';
import FullButton from '../../../components/FullButton';

export default function Success() {
  const colorScheme = useColorScheme();
  const confettiRef = useRef(null);

  useEffect(() => {
    triggerConfetti();
  }, []);

  function triggerConfetti() {
    confettiRef.current.play(0);
  }

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <View style={styles.subContainer}>
        <View style={{ flex: 1.5 }} />
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={styles.successIconContainer}>
            <MaterialCommunityIcons name={'check-bold'} size={40} color={'white'} />
          </View>
          <Text style={styles.congratsText}>Congrates</Text>
          <Text style={styles.messageText}>You have signed up successfully. Go to home & start exploring courses</Text>
        </View>
        <View>
          <FullButton backgroundColor={colorTheme.primaryColor} title={'Go to Home'} textColor={'white'} navigateTo={'Home'} style={{ marginBottom: 10 }} />
        </View>
        <LottieView
          ref={confettiRef}
          source={require('../../../assets/lottie/success.json')}
          autoPlay={false}
          loop={false}
          style={styles.lottie}
          resizeMode='cover'
        />
      </View>
    </View>
  )
}

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  subContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  allText: {
    fontFamily: colorTheme.appcommonfont,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    pointerEvents: 'none',
  },
  successIconContainer: {
    backgroundColor: "#27AE60",
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  congratsText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  messageText: {
    textAlign: 'center',
  },
});

const lightStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: colorTheme.lightappBackGroundColor,
  },
  congratsText: {
    ...baseStyle.congratsText,
    color: 'black',
  },
  messageText: {
    ...baseStyle.messageText,
    color: 'black',
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: colorTheme.darkappBackGroundColor,
  },
  congratsText: {
    ...baseStyle.congratsText,
    color: 'white',
  },
  messageText: {
    ...baseStyle.messageText,
    color: 'white',
  },
});
