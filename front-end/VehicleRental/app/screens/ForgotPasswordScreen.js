import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { Input, VStack, Box, Button } from "native-base"
import {  StyleSheet, Text } from 'react-native';

function ForgotPasswordScreen(props) {
    const [value, setValue] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () =>{
        navigation.navigate('Reset password');
    };

    const onBackToSignInPressed = () =>{
        navigation.navigate('Sign In');
    };

    return (
        <Box style={styles.root}>

        <VStack style={styles.container1}>
         
            <Text style={styles.text1}>Forgot password</Text>

         <VStack style={styles.container2} space={2}>
            <Input placeholder='Username\Email' placeholderTextColor="white" color="white" value={value} onChangeText={setValue}/>

            <Button w="100%" onPress={onSendPressed} bgColor="darkBlue.600">Send</Button>

            <Button onPress={onBackToSignInPressed} _text={{color:"trueGray.500"}} variant="link">Back to Sign In.</Button>
            
         </VStack>
    
        </VStack>


        </Box>
    );
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: "#454545",
    },
    container1: {
        flex: 1,
        alignItems: "center",

        top: 40,
        margin: 15,
    },
    container2: {
        alignItems: "center",
        top:30,
        width:"85%",
        backgroundColor: "#363636",

        borderColor: "#363636",
        borderWidth: 1,
        borderRadius: 5,

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    text1: {
        fontSize:35,
        color: "white",
        fontWeight: "bold"
    },
    text2: {
        color: "grey",
        marginVertical: 10,
    },
    link: {
        color: "#3B71F3",
    }
})

export default ForgotPasswordScreen;