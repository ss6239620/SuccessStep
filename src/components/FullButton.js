import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorTheme } from '../constant';
import { useNavigation } from '@react-navigation/native';

export default function FullButton({ icon, title, backgroundColor, textColor, iconColor, style, navigateTo, onPress }) {
    const navigation = useNavigation()
    function handleClick(params) {
        navigateTo ? navigation.navigate(navigateTo) : null;
        onPress ? onPress() : null;
    }
    return (
        <TouchableOpacity
            onPress={handleClick}
            style={[styles.button, { backgroundColor: backgroundColor, borderWidth: 1, borderColor: colorTheme.borderColor, ...style }]}>
            {icon && <MaterialCommunityIcons name={icon} color={iconColor} size={25} />}
            <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        padding: 10,
        fontSize: 16,
        fontWeight: '400',
    },
})