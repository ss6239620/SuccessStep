import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
    const colorScheme = useColorScheme();
    const navigation=useNavigation()
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={'chevron-left'} color={styles.icon.color} size={30} onPress={()=>navigation.goBack()} />
            <Text style={styles.text}>{title ? title : 'Back'}</Text>
        </View>
    );
}

const baseStyles = {
    container: {
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:10
    },
    text: {
        fontSize: 17,
        fontWeight: '400',
    },
    icon: {
        color: 'black', // default color, will be overridden
    },
};

const lightStyles = StyleSheet.create({
    ...baseStyles,
    text: {
        ...baseStyles.text,
        color: 'black',
    },
    icon: {
        color: 'black',
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    text: {
        ...baseStyles.text,
        color: 'white',
    },
    icon: {
        color: 'white',
    },
});
