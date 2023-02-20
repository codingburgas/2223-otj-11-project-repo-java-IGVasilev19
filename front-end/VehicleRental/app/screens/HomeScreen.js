import { Text, StyleSheet} from 'react-native'
import { HamburgerIcon, Box, HStack, Menu, Pressable } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const HomeScreen = () => {
  return (
    <Box style={styles.root}>
      <HStack top={20} space={115} alignItems="center" justifyContent="center">
        <Text style={{fontSize: 30,fontWeight:"bold",color: "white"}}>ITravelPrivate</Text>
        {/* <Box>
        <Menu w="190" trigger={triggerProps => { return <Pressable accessibilityLabel="More options menu" {...triggerProps}> <FontAwesome name="user-circle" size={45} color="#BDC3C7" backgroundColor="#A6ACAF"/></Pressable>;}}>
        <Menu.Item>Account</Menu.Item>
        <Menu.Item>Sign out</Menu.Item>
      </Menu>
      </Box> */}
      
      </HStack>
      <Menu shadow={2} w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  )
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "#454545",
  },
})
export default HomeScreen