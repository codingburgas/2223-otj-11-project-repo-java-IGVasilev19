import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OwnerHomeScreen from '../screens/OwnerHomeScreen';
import RenterHomeScreen from '../screens/RenterHomeScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Sign In" component={SignInScreen}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="Confirm email" component={ConfirmEmailScreen}/>
        <Stack.Screen name="Reset password" component={ResetPasswordScreen}/>
        <Stack.Screen name="OwnerHome" component={OwnerHomeScreen}/>
        <Stack.Screen name="RenterHome" component={RenterHomeScreen}/>
        <Stack.Screen name="Account" component={AccountScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;