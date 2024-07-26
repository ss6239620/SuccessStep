import { StyleSheet, Text, View, StatusBar, useColorScheme, } from 'react-native'
import React from 'react'
import { colorTheme } from '../constant';


export default function Template() {
    const colorScheme = useColorScheme()
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
    return (
        <View style={styles.container}>
            {colorScheme === 'light' ?
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={colorTheme.lightappBackGroundColor}
                /> :
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={colorTheme.darkappBackGroundColor}
                />
            }
            {/* write your code here  */}
            <Text style={styles.allText}>hshshsh</Text>
        </View>
    )
}

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.lightappBackGroundColor,
        paddingTop: 5,
        paddingHorizontal: 10
    },
    allText: {
        color: 'black',
        fontFamily: colorTheme.appcommonfont
    }
})

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.darkappBackGroundColor,
        paddingTop: 5,
        paddingHorizontal: 10
    },
    allText: {
        color: 'white',
        fontFamily: colorTheme.appcommonfont
    }
})