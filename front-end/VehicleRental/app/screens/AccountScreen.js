import { View, Text, StyleSheet } from 'react-native'
import { HamburgerIcon, Box, HStack, Menu, Pressable } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const AccountScreen = () => {
  return (
    <Box style={styles.root}>
    <Text size={35}>This is account screen</Text>
    </Box>
  )
}

const styles = StyleSheet.create({
    root:{
      flex: 1,
      backgroundColor: "#454545",
    },
  })

export default AccountScreen