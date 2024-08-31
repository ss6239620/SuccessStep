import { StyleSheet, TextInput, useColorScheme, } from 'react-native'
import React from 'react'
import { colorTheme } from '../../constant';

export default function NormalTextInput({ placeholder, inputMode,style }) {
    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
    return (
        <TextInput
            placeholder={placeholder || ''}
            inputMode={inputMode || 'text'}
            style={[styles.viewStyle,{...style}]}
        />
    )
}

const darkStyles = StyleSheet.create({
    viewStyle: { borderWidth: 1, borderColor: colorTheme.darkBorderColor, borderRadius: 10, color: 'white', padding: 10 }
})

const lightStyles = StyleSheet.create({
    viewStyle: { borderWidth: 1, borderColor: colorTheme.borderColor, borderRadius: 10, color: 'black', padding: 10 }
})