import { StyleSheet, Text, View, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { colorTheme } from '../../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../../components/Header';
import { countriesDropDownData } from '../../../assets/data/DropDown';
import CountryDropDown from '../../../components/TextInput/CountryDropDown';
import FullButton from '../../../components/FullButton';

export default function LoginWithOTP() {
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
      <View style={styles.subContainer}>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={[styles.allText, { fontSize: 19 }]}>Login with OTP</Text>
          <View style={{ marginTop: 30 }}>
            <Text style={[styles.allText, styles.subText, { marginTop: 5 }]}>Mobile Number</Text>
            <View style={{ marginTop: 10 }}>
              <CountryDropDown data={countriesDropDownData} />
              <View style={{ marginTop: 20 }}>
                <FullButton backgroundColor={colorTheme.primaryColor} title={'Continue'} textColor={'white'} navigateTo={'VerificationCode'} />
              </View>
              <View style={{ marginTop: 20 }}>
                <FullButton  title={'Login with Email'} textColor={colorScheme==='dark'?'white':'black'} navigateTo={'LoginWithEmail'} />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <Text style={styles.subText}>Don't have an account?</Text>
            <Text style={[styles.linkText, { marginLeft: 5,color:colorTheme.primaryColor }]}>Register</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, alignItems: 'center', }}>
            <View style={styles.divider} />
            <Text style={[styles.subText,{marginHorizontal:10}]}>OR</Text>
            <View style={styles.divider} />
          </View>
          <View style={{ marginTop: 30 }}>
            <FullButton title={'Continue with Google'} backgroundColor={'white'} textColor={'black'} icon={'google'} iconColor={'black'} />
            <FullButton title={'Continue with FaceBook'} backgroundColor={'white'} textColor={'black'} icon={'facebook'} iconColor={'black'} style={{ marginTop: 15 }} />
          </View>
        </View>
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
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  allText: {
    fontFamily: colorTheme.appcommonfont,
  },
  subText: {
    fontSize: 16,
  },
  divider: {
    borderWidth: 0.5,
    width: '45%',
    height: 1,
    borderColor: colorTheme.borderColor,
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
  divider: {
    ...baseStyle.divider,
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
    color: 'white',
  },
  divider: {
    ...baseStyle.divider,
  },
});
