import { StyleSheet, TextInput, useColorScheme, View } from 'react-native';
import React from 'react';
import { colorTheme } from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NormalTextInputWithIcon({ placeholder, inputMode, style,icon,secureTextEntry,textInputStyle,divider}) {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const styles = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[styles.viewStyle, style]}>
        { icon &&   <MaterialCommunityIcons
                name={icon}
                color={isDarkMode ? 'white' : 'black'}
                size={25}
            />}
            {divider &&<View style={styles.divider} />}
            <TextInput
                placeholder={placeholder || ''}
                inputMode={inputMode || 'text'}
                style={[styles.textInput, { color: isDarkMode ? 'white' : 'black' ,}]}
                placeholderTextColor={isDarkMode ? 'gray' : 'lightgray'}
                secureTextEntry={secureTextEntry || false}
            />
        </View>
    );
}

const baseStyles = {
    viewStyle: {
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    divider: {
        width: 1,
        borderWidth: 0.5,
        height: '100%',
        marginLeft: 10,
    },
    textInput: {
        width: '90%',
    },
};

const lightStyles = StyleSheet.create({
    ...baseStyles,
    viewStyle: {
        ...baseStyles.viewStyle,
        borderColor: colorTheme.borderColor,
    },
    divider: {
        ...baseStyles.divider,
        borderColor: colorTheme.borderColor,
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    viewStyle: {
        ...baseStyles.viewStyle,
        borderColor: colorTheme.darkBorderColor,
    },
    divider: {
        ...baseStyles.divider,
        borderColor: colorTheme.darkBorderColor,
    },
});

