/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colorTheme } from '../../constant';

const NormalDropDown = ({ placeholder,data }) => {
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown,]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                autoScroll
                search
                maxHeight={300}
                minHeight={100}
                labelField="label"
                valueField="value"
                searchField="search"
                placeholder={!isFocus ? placeholder || '' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default NormalDropDown;

const baseStyles = {
    dropdown: {
        borderWidth: 0.5,
        borderRadius: 8,
        padding: 15,
    },
    label: {
        position: 'absolute',
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
};

const lightStyles = StyleSheet.create({
    ...baseStyles,
    dropdown: {
        ...baseStyles.dropdown,
        borderColor: colorTheme.borderColor,
    },
    label: {
        ...baseStyles.label,
        color: 'black',
    },
    placeholderStyle: {
        ...baseStyles.placeholderStyle,
        color: 'gray',
    },
    selectedTextStyle: {
        ...baseStyles.selectedTextStyle,
        color: 'gray',
    },
    inputSearchStyle: {
        ...baseStyles.inputSearchStyle,
        color: 'black',
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    dropdown: {
        ...baseStyles.dropdown,
        borderColor: colorTheme.darkBorderColor
    },
    label: {
        ...baseStyles.label,
        color: 'white',
    },
    placeholderStyle: {
        ...baseStyles.placeholderStyle,
        color: 'white',
    },
    selectedTextStyle: {
        ...baseStyles.selectedTextStyle,
        color: 'white',
    },
    inputSearchStyle: {
        ...baseStyles.inputSearchStyle,
        color: 'white',
    },
});
