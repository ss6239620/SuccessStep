import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { colorTheme } from '../../../constant';
import Header from '../../../components/Header';
import { countriesDropDownData } from '../../../assets/data/DropDown';
import CountryDropDown from '../../../components/TextInput/CountryDropDown';
import FullButton from '../../../components/FullButton';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PhoneNumber() {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '720467736730-lha8a2oqh6a5ftfaumucrqo52i1v93h3.apps.googleusercontent.com',
    });
  }, [])

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken, user } = await GoogleSignin.signIn();
      
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);

      console.log(userCredential.user);
      

      await AsyncStorage.setItem('userInfo', JSON.stringify(userCredential.user));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <ScrollView style={styles.subContainer}>
        <Text style={[styles.titleText, { marginTop: 20 }]}>Enter your number</Text>
        <Text style={[styles.subText, { marginTop: 5 }]}>Enter your number to receive verification code</Text>
        <View style={{ marginTop: 40 }}>
          <Text style={[styles.subText, { marginTop: 5 }]}>Mobile Number</Text>
          <View style={{ marginTop: 10 }}>
            <CountryDropDown data={countriesDropDownData} />
            <View style={{ marginTop: 20 }}>
              <FullButton backgroundColor={colorTheme.primaryColor} title={'Continue'} textColor={'white'} navigateTo={'OTP'} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <Text style={styles.subText}>Already have an account?</Text>
            <Text style={[styles.linkText, { marginLeft: 5 }]}>Login</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, alignItems: 'center' }}>
            <View style={styles.divider} />
            <Text style={styles.subText}>OR</Text>
            <View style={styles.divider} />
          </View>
          <View style={{ marginTop: 30 }}>
            <FullButton title={'Continue with Google'} backgroundColor={'white'} textColor={'black'} icon={'google'} iconColor={'black'} onPress={onGoogleButtonPress} />
            <FullButton title={'Continue with FaceBook'} backgroundColor={'white'} textColor={'black'} icon={'facebook'} iconColor={'black'} style={{ marginTop: 15 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const baseStyles = {
  container: {
    flex: 1,
    paddingTop: 5,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  titleText: {
    fontWeight: '500',
    fontSize: 20,
  },
  subText: {
    fontWeight: '400',
    fontSize: 15,
  },
  linkText: {
    fontWeight: '400',
    fontSize: 15,
    color: colorTheme.primaryColor,
  },
  divider: {
    borderWidth: 0.5,
    width: '45%',
    height: 1,
    borderColor: colorTheme.borderColor,
  },
};

const lightStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: colorTheme.lightappBackGroundColor,
  },
  titleText: {
    ...baseStyles.titleText,
    color: 'black',
  },
  subText: {
    ...baseStyles.subText,
    color: 'black',
  },
  linkText: {
    ...baseStyles.linkText,
  },
  divider: {
    ...baseStyles.divider,
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: colorTheme.darkappBackGroundColor,
  },
  titleText: {
    ...baseStyles.titleText,
    color: 'white',
  },
  subText: {
    ...baseStyles.subText,
    color: 'white',
  },
  linkText: {
    ...baseStyles.linkText,
  },
  divider: {
    ...baseStyles.divider,
  },
});
