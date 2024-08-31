import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView } from 'react-native'
import React from 'react'
import { colorTheme } from '../../../constant';
import Header from '../../../components/Header';
import NormalTextInputWithIcon from '../../../components/TextInput/NormalTextInputWithIcon';
import FullButton from '../../../components/FullButton';

export default function SetPassword() {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>
        <Text style={[styles.allText, { fontSize: 19, marginTop: 20 }]}>Set new password</Text>
        <View style={{ marginVertical: 10, marginTop: 50 }}>
          <Text style={[styles.allText, styles.subText, { marginBottom: 5 }]}>New Password</Text>
          <NormalTextInputWithIcon icon={'lock'} secureTextEntry={true} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={[styles.allText, styles.subText, { marginBottom: 5 }]}>Confirm Password</Text>
          <NormalTextInputWithIcon icon={'lock'} secureTextEntry={true} />
        </View>
        <View style={{ marginTop: 20 }}>
          <FullButton backgroundColor={colorTheme.primaryColor} title={'Reset Password'} textColor={'white'} navigateTo={'LoginWithEmail'} />
        </View>
      </ScrollView>
    </View>
  )
}

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  allText: {
    fontFamily: colorTheme.appcommonfont,
  },
  subText: {
    fontSize: 16,
  },
});

const lightStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: colorTheme.lightappBackGroundColor,
  },
  allText: {
    ...baseStyle.allText,
    color: 'black',
  },
  subText: {
    ...baseStyle.subText,
    color: 'black',
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: colorTheme.darkappBackGroundColor,
  },
  allText: {
    ...baseStyle.allText,
    color: 'white',
  },
  subText: {
    ...baseStyle.subText,
    color: 'black',
  },
});
