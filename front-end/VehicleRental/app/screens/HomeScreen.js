import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Finally back home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "#454545",
  },
  text: {
    fontSize: 35,
    color: "white", 
    textAlign: 'center',
    top:70,
  },
})

export default HomeScreen