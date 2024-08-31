import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import GetStarted from '../screens/Authentication/GetStarted'
import SignUpNavigator from './SignupNav'
import LoginNavigator from './LoginNavigation'
import DrawerNavigator from './DrawerNavigator'
import VideoCall from '../screens/Chat/VideoCall'

export default function StackNavigation() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name='SignUpNavigator' component={SignUpNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='LoginNavigator' component={LoginNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='VideoCall' component={VideoCall} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})