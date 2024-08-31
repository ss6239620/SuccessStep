import React, { useState } from 'react';
import { StyleSheet, View, TextInput, useColorScheme } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { colorTheme } from '../../constant';

const CountryDropDown = ({data}) => {
  const [country, setCountry] = useState('');
  const [phone, setphone] = useState('')
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={[{ flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 8, alignItems: 'center' },styles.container]}>
      <SelectCountry
        // search
        style={{ width: '25%' }}
        selectedTextStyle={{ textAlign: 'center' }}
        placeholderStyle={{}}
        imageStyle={{ borderRadius: 5 }}
        iconStyle={{}}
        maxHeight={200}
        value={country}
        data={data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Select"
        searchPlaceholder="Search..."
        onChange={(e) => {
          setCountry(e.value);
        }}
      />
      <View style={[{ borderWidth: 1, height: '100%',  },styles.emptyView]} />
      <TextInput
        style={{ padding: 0, width: '70%', marginHorizontal: 5 }}
        value={phone}
        onChange={(e) => setphone(e)}
        inputMode='numeric'
      />
    </View>
  );
};

export default CountryDropDown;

const lightStyles = StyleSheet.create({
  container:{
    borderColor:colorTheme.borderColor
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 160,
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  emptyView:{
    borderColor:colorTheme.borderColor
  }
});


const darkStyles = StyleSheet.create({
  container:{
    borderColor:colorTheme.darkBorderColor
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 160,
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  emptyView:{
    borderColor:colorTheme.borderColor
  }
});