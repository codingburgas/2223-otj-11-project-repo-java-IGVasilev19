import React from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ConfirmEmailScreen from './app/screens/ConfirmEmailScreen';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';

export default function App() {
  return(
  <View style={styles.root}>
     <ConfirmEmailScreen/>
  </View>
  )

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#454545",
  }
})