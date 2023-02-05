import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, keyboardType, returnKeyType}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      placeholderTextColor="white"
      style= {styles.textInput}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#363636",
      width: "90%",
      height: 50,
        
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 10,

      paddingHorizontal: 15,
      marginVertical: 10,
      marginHorizontal: 11,
    },
    textInput: {
      top:5,
      textAlignVertical: "bottom",
      color: "white",
    }
})

export default CustomInput