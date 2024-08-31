import { StyleSheet, Text, View, StatusBar, useColorScheme, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { colorTheme } from '../../constant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function GetStarted() {

    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
    const navigation=useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={colorScheme === 'light' ? 'light-content' : 'light-content'}
                backgroundColor="transparent"
                translucent={true}
            />
            <ImageBackground source={require('../../assets/img/try.jpg')} style={{ flex: 1.5 }} imageStyle={{ opacity: 0.9 }}>
            </ImageBackground>
            <View style={{ flex: 2, paddingHorizontal: 10, justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.5 }}>
                    <FontAwesome5 name={'user-graduate'} color={'black'} size={35} />
                    <Text style={{ fontFamily: colorTheme.appcommonfont, color: 'black', fontWeight: '500', fontSize: 20 }}>Success Step</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly', marginBottom: 20 }}>
                    <Text style={[styles.mainText, { textAlign: 'center', fontSize: 35, fontWeight: '800' }]}>Let's Study To Make The World Better</Text>
                    <Text style={[styles.subText, { textAlign: 'center', fontWeight: '400', fontSize: 17 }]}>Ready to start your journey here SuccessStep is here to Help.</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUpNavigator')} style={[styles.button, { backgroundColor: colorTheme.primaryColor }]}>
                        <MaterialCommunityIcons name={'email'} color={'white'} size={25} />
                        <Text style={styles.buttonText}>Signup with email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginNavigator')} style={[styles.button, {  backgroundColor: colorTheme.accentColor  }]}>
                        <MaterialCommunityIcons name={'login'} color={colorTheme.iconWithBlueBackGround} size={25} />
                        <Text style={styles.changeButtonText}>Login to your account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const baseStyles = {
    button: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        padding: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    mainText: {
        fontFamily: colorTheme.appcommonfont,
    },
    subText: {
        fontFamily: colorTheme.appcommonfont,
    },
};

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.lightappBackGroundColor,
    },
    mainText: {
        ...baseStyles.mainText,
        color: 'black',
    },
    subText: {
        ...baseStyles.subText,
        color: 'black',
    },
    button: {
        ...baseStyles.button,
    },
    buttonText: {
        ...baseStyles.buttonText,
    },
    changeButtonText: {
        ...baseStyles.buttonText,
        color: colorTheme.iconWithBlueBackGround
    }
});

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.darkappBackGroundColor,
    },
    mainText: {
        ...baseStyles.mainText,
        color: 'white',
    },
    subText: {
        ...baseStyles.subText,
        color: 'white',
    },
    button: {
        ...baseStyles.button,
    },
    buttonText: {
        ...baseStyles.buttonText,
    },
    changeButtonText: {
        ...baseStyles.buttonText,
    }
});
