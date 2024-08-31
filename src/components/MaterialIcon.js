import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';


export default function MaterialIcon({ name, size, style, color, onPress }) {
  const colorScheme = useColorScheme();
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={{ ...style }} onPress={() => onPress ?onPress: null}>
      <MaterialCommunityIcons name={name ? name : 'menu'} size={size ? size : 25} color={color ? color : colorScheme === 'dark' ? 'white' : 'black'} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})