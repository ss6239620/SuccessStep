import { StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import { colorTheme } from '../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile/Profile';

const DrawerStack = createDrawerNavigator();

export default function DrawerNavigator() {
    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    return (
        <DrawerStack.Navigator
            drawerContent={props => <DrawerView {...props} styles={styles} />}
            screenOptions={({ route }) => ({
                headerShown: false,
                drawerIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'BottomNavigator') {
                        iconName = 'home'; // Example icon for BottomNavigator
                    }else if(route.name === 'ProfileDrawer'){
                        iconName = 'account'; 
                    }

                    return <MaterialCommunityIcons name={iconName} color={'white'} size={size} />;
                },
                drawerStyle: styles.drawerStyle,
                drawerActiveBackgroundColor: "transparent",
                drawerInactiveBackgroundColor: 'transparent',
                drawerLabelStyle: { color: 'white', fontSize: 16,fontFamily:colorTheme.appcommonfont },
            })}
        >
            <DrawerStack.Screen name="BottomNavigator" component={BottomNavigator} options={{ drawerLabel: "Home" }} />
            <DrawerStack.Screen name="ProfileDrawer" component={Profile} options={{ drawerLabel: "Profile" }} />
        </DrawerStack.Navigator>
    );
}

function DrawerView(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerInsideComponent styles={props.styles} />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function DrawerInsideComponent({ styles }) {
    const colorScheme = useColorScheme();
    return (<>
        <StatusBar
            barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={colorScheme === 'dark' ? colorTheme.darkappBackGroundColor : colorTheme.lightappBackGroundColor}
            translucent={true}
        />
        <View style={[styles.drawerContainer]}>
            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <MaterialCommunityIcons name={'account'} color={"gray"} size={70} style={{ padding: 15 }} />
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.allText}>Sharvesh Singh</Text>
                </View>
                <Text style={styles.subText}>+91 7718833236</Text>
            </View>
        </View>
    </>
    );
}

const baseStyle = StyleSheet.create({
    drawerContainer: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    drawerStyle: {

    },
    profileContainer: {
        padding: 20,
    },
    avatarContainer: {
        width: 100,
        borderRadius: 50,
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    allText: {
        fontFamily: colorTheme.appcommonfont,
        fontSize: 25
    },
    subText: {
        fontSize: 15,
        marginTop: 5
    },
});

const lightStyles = StyleSheet.create({
    ...baseStyle,
    drawerContainer: {
        ...baseStyle.drawerContainer,
        backgroundColor: colorTheme.lightappBackGroundColor,
    },
    avatarContainer: {
        ...baseStyle.avatarContainer,
        backgroundColor: colorTheme.borderColor,
    },
    allText: {
        ...baseStyle.allText,
        color: 'black',
    },
    subText: {
        ...baseStyle.subText,
        color: 'black',
    },
    drawerStyle:{
        ...baseStyle.drawerStyle,
        backgroundColor:colorTheme.accentColor
    }
});

const darkStyles = StyleSheet.create({
    ...baseStyle,
    drawerContainer: {
        ...baseStyle.drawerContainer,
        backgroundColor: colorTheme.darkBorderColor,
    },
    avatarContainer: {
        ...baseStyle.avatarContainer,
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

    drawerStyle:{
        ...baseStyle.drawerStyle,
        backgroundColor:colorTheme.darkappBackGroundColor
    }
});
