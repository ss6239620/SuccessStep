import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { colorTheme } from '../../../constant';
import Header from '../../../components/Header';
import FullButton from '../../../components/FullButton';
import NormalTextInputWithIcon from '../../../components/TextInput/NormalTextInputWithIcon';

export default function NameEmail() {
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
        <Text style={[styles.titleText, { marginTop: 20 }]}>Set Credentials</Text>
        <View style={{ marginTop: 40 }}>
          <Text style={[styles.subText, { marginBottom: 10, }]}>Full Name</Text>
          <NormalTextInputWithIcon icon={'lead-pencil'} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.subText, { marginBottom: 10, }]}>Email</Text>
          <NormalTextInputWithIcon icon={'email'} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.subText, { marginBottom: 10, }]}>Password</Text>
          <NormalTextInputWithIcon icon={'lock'} />
        </View>
        <View style={{ marginTop: 20 }}>
          <FullButton backgroundColor={colorTheme.primaryColor} title={'Continue'} textColor={'white'} navigateTo={'EducationInfo'} />
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
