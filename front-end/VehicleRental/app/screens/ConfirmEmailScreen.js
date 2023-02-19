import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { Input, VStack, Box, HStack, Button } from "native-base"
import {  StyleSheet, Text} from 'react-native';

function ConfirmEmailScreen(props) {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () =>{
        navigation.navigate('Home');
    };

    const onResendCodePressed = () =>{
        console.warn("Resend code");
    };

    const onBackToSignInPressed = () =>{
        navigation.navigate('Sign In');
    };

    return (
    <Box style={styles.root}>
        <Box style={styles.container1}>
         
            <Text style={styles.text1}>Confirm your email</Text>

         <VStack style={styles.container2} space={2}>
            <Input 
            placeholder='Enter your confirmation code'
            value={code}
            onChangeText={setCode}
            />

            <Button w="100%" onPress={onConfirmPressed} bgColor="darkBlue.600">Confirm</Button>
            
          <HStack space={2}>
            <Button onPress={onResendCodePressed} _text={{color:"trueGray.500"}} variant="link">Resend code</Button>

            <Button onPress={onBackToSignInPressed} _text={{color:"trueGray.500"}} variant="link">Back to Sign In</Button>
          </HStack>
            
         </VStack>
    
        </Box>

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

export default ConfirmEmailScreen;