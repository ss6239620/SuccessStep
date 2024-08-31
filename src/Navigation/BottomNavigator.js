import { StyleSheet, View, useColorScheme } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home/Home';
import { colorTheme } from '../constant';
import Map from '../screens/Map/Map';
import Profile from '../screens/Profile/Profile';

const BottomStack = createBottomTabNavigator();

export default function BottomNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomStack.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarInactiveTintColor: colorScheme === 'dark' ? colorTheme.darkBorderColor : colorTheme.borderColor, // Adjust inactive color based on theme
                tabBarActiveTintColor: colorTheme.primaryColor,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: colorScheme === 'dark' ? colorTheme.darkappBackGroundColor : colorTheme.lightappBackGroundColor, // Adjust background color
                },
                headerShown: false,
            }}
        >
            <BottomStack.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <BottomStack.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map-marker" color={color} size={size} />
                    ),
                }}
            />
            <BottomStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            {/* Add more screens as needed */}
        </BottomStack.Navigator>
    );
}

const styles = StyleSheet.create({});
