import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView } from 'react-native'
import React from 'react'
import { colorTheme } from '../../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../../components/Header';
import CountryDropDown from '../../../components/TextInput/CountryDropDown';
import { countriesDropDownData } from '../../../assets/data/DropDown';
import FullButton from '../../../components/FullButton';

export default function ResetPassword() {
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
      <ScrollView style={styles.subContainer} contentContainerStyle={false}>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.allText, { fontSize: 19 }]}>Reset Password</Text>
          <Text style={[styles.subText, { marginTop: 20 }]}>Please enter the phone number associated with your account, and we will send you instructions to reset your password.</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={[styles.allText, styles.subText, { marginTop: 5 }]}>Mobile Number</Text>
          <View style={{ marginTop: 10 }}>
            <CountryDropDown data={countriesDropDownData} />
            <View style={{ marginTop: 20 }}>
              <FullButton backgroundColor={colorTheme.primaryColor} title={'Continue'} textColor={'white'} navigateTo={'SetPassword'} />
            </View>
          </View>
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
    fontSize: 15,
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
