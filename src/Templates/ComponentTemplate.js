import { StyleSheet, Text, View, StatusBar, useColorScheme, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Header';
import { colorTheme } from '../../constant';

export default function Courses() {
    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    return (
        <View style={styles.container}>
            <Text style={styles.allText}>hdh</Text>
        </View>
    )
}

const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    allText: {
        fontFamily: colorTheme.appcommonfont,
    },
    subText: {
        fontSize: 16,
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
