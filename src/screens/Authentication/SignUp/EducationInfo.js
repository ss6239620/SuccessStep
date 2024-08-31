import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { colorTheme } from '../../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../components/Header';
import { countriesDropDownData, majorData, universityData } from '../../../assets/data/DropDown';
import CountryDropDown from '../../../components/TextInput/CountryDropDown';
import FullButton from '../../../components/FullButton';
import NormalTextInput from '../../../components/TextInput/NormalTextInput';
import DropdownComponent from '../../../components/TextInput/NormalDropDown';

export default function EducationInfo() {
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
      <ScrollView style={styles.subContainer}>
        <Text style={[styles.titleText, { marginTop: 20 }]}>Your Education</Text>
        <Text style={[styles.subText, { marginTop: 5 }]}>Provide your educational information</Text>
        <View style={{ marginTop: 40 }}>
          <Text style={[styles.subText, { marginBottom: 10 }]}>University ID</Text>
          <NormalTextInput inputMode={'numeric'} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.subText, { marginBottom: 10 }]}>Major</Text>
          <DropdownComponent placeholder={'Choose your major...'} data={majorData} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.subText, { marginBottom: 10 }]}>University</Text>
          <DropdownComponent placeholder={'Choose your university...'} data={universityData} />
        </View>
        <View style={{ marginTop: 20 }}>
          <FullButton backgroundColor={colorTheme.primaryColor} title={'Continue'} textColor={'white'} navigateTo={'UploadPhoto'} />
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
