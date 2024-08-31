// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginWithOTP from '../screens/Authentication/Login/LoginWithOTP';
import LoginWithEmail from '../screens/Authentication/Login/LoginWithEmail';
import ResetPassword from '../screens/Authentication/Login/ResetPassword';
import SetPassword from '../screens/Authentication/Login/SetPassword';
import VerificationCode from '../screens/Authentication/Login/VerificationCode';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LoginWithOTP">
            <Stack.Screen name="LoginWithOTP" component={LoginWithOTP} options={{ headerShown: false }} />
            <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="SetPassword" component={SetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="VerificationCode" component={VerificationCode} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default LoginNavigator;
