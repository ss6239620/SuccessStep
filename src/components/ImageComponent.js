import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImageComponent({ source, width, height, borderRadius, style }) {
    return (
        <View style={{ width: width ? width : 50, height: height ? height : 50, borderRadius: borderRadius ? borderRadius : 25, overflow: 'hidden', marginBottom: 10, ...style }}>
            <Image
                source={source}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
            />
        </View>
    )
}

const styles = StyleSheet.create({})