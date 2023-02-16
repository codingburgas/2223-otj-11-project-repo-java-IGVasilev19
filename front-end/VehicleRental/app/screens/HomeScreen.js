import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { Avatar, Box } from "native-base";
import React from 'react'

const HomeScreen = () => {
  return (
    <Box style={styles.root}>
    <View style={styles.container}>
      <Text style={styles.text}>ITravelPrivate</Text>
      <Pressable>
      <Avatar style={styles.avatar} source={require('../assets/images/user.png')}/>
      </Pressable>
    </View>
    </Box>
  )
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "#454545",
  },
  container: {
    flexDirection: 'row',
    top:60,
    justifyContent: 'space-between',
  },
  text: {
    top: 5,
    fontSize: 30,
    fontWeight:"bold",
    color: "white",
    marginLeft: 20
  },
  avatar: {
    height:50,
    width:50,
    marginRight: 20
  },
})
export default HomeScreen