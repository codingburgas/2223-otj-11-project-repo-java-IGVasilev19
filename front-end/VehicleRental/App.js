import React from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ConfirmEmailScreen from './app/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './app/screens/ResetPasswordScreen';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';

export default function App() {
  return(
  <View style={styles.root}>
     <ResetPasswordScreen/>
  </View>
  )

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#454545",
  }
})