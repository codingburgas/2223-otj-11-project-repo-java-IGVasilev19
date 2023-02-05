import React from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';

export default function App() {
  return(
  <View style={styles.root}>
     <SignUpScreen/>
  </View>
  )

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#454545",
  }
})