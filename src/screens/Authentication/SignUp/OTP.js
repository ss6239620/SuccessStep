import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import { colorTheme } from '../../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../components/Header';
import { countriesDropDownData } from '../../../assets/data/DropDown';
import CountryDropDown from '../../../components/TextInput/CountryDropDown';
import FullButton from '../../../components/FullButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


export default function OTP() {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <ScrollView style={styles.subContainer}>
        <Text style={[styles.titleText, { marginTop: 20 }]}>Enter verification code</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={styles.subText}>Enter the verification code sent to</Text>
          <Text style={[styles.linkText, { marginLeft: 5 }]}>(7718822353)</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={{ marginTop: 20 }}>
            <FullButton backgroundColor={colorTheme.primaryColor} title={'Continue'} textColor={'white'} navigateTo={'NameEmail'} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <Text style={styles.subText}>Didn't receive the code?</Text>
            <Text style={[styles.linkText, { marginLeft: 5 }]}>Resend</Text>
            <Text style={[styles.subText, { marginLeft: 5 }]}>in 30 seconds </Text>
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
  codeFieldRoot: { marginTop: 0 },
  cell: {
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    textAlign: 'center',
    borderRadius:10
  },
  focusCell: {
    borderColor: '#000',
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
  cell:{
    ...baseStyles.cell,
    borderColor:colorTheme.borderColor,
    color:'black'
  },
  focusCell:{
    ...baseStyles.focusCell,
    borderColor:colorTheme.primaryColor
  }
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
  cell:{
    ...baseStyles.cell,
    borderColor:colorTheme.darkBorderColor,
    color:'white'
  },
  focusCell:{
    ...baseStyles.focusCell,
    borderColor:colorTheme.primaryColor
  }
});
