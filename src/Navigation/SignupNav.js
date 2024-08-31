// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PhoneNumber from '../screens/Authentication/SignUp/PhoneNumber'
import OTP from '../screens/Authentication/SignUp/OTP';
import NameEmail from '../screens/Authentication/SignUp/NameEmail';
import EducationInfo from '../screens/Authentication/SignUp/EducationInfo';
import UploadPhoto from '../screens/Authentication/SignUp/UploadPhoto';
import Success from '../screens/Authentication/SignUp/Success';

const Stack = createNativeStackNavigator();

const SignUpNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="PhoneNumber">
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ headerShown: false }} />
            <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
            <Stack.Screen name="NameEmail" component={NameEmail} options={{ headerShown: false }} />
            <Stack.Screen name="EducationInfo" component={EducationInfo} options={{ headerShown: false }} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default SignUpNavigator;
