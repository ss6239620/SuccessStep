import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigationRef } from './navRef'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/Navigation/StackNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})