import { StyleSheet, Text, View, useColorScheme, Image } from 'react-native'
import React from 'react'
import { colorTheme } from '../../constant';
import MaterialIcon from '../MaterialIcon';

export default function InfoCard({ data }) {
    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    return (
        <View style={[styles.container, { marginHorizontal: 10, borderRadius: 10 }]}>
            <Image source={require('../../assets/img/biology.jpg')} style={{
                width: '100%',
                height: 150,
                // resizeMode:'contain'
            }}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
            />
            <Text style={[styles.allText, { fontSize: 22, fontWeight: '600' }]}>
                Advanced Frontend Programming Texhnique
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Text style={[styles.subText]}>Jule Antiloe</Text>
                <Text style={[styles.subText, { marginHorizontal: 5 }]}>.</Text>
                <Text style={[styles.subText]}>1hr </Text>
            </View>
            <View style={{ backgroundColor: colorTheme.borderColor, height: 1, marginVertical: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.subText]}>$12.99</Text>
                    <Text style={[styles.subText, { marginHorizontal: 2 }]}>/$36</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <MaterialIcon name={'star'} color={'#FB923c'} />
                    <Text style={[styles.subText, { marginHorizontal: 5 }]}>4.5</Text>
                    <Text style={[styles.subText]}>(2,890)</Text>
                </View>
            </View>
            <View style={{ padding: 8, borderRadius: 10, backgroundColor: '#E7D5FF', alignItems: 'center', width: '50%', marginVertical: 10 }}>
                <Text style={[styles.subText]}>Top Author</Text>
            </View>
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
        color: 'white',
    },
});
