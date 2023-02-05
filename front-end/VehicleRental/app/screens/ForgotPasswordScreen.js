import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function ForgotPasswordScreen(props) {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () =>{
        navigation.navigate('Reset password');
    };

    const onBackToSignInPressed = () =>{
        navigation.navigate('Sign In');
    };

    return (
        <View style={styles.root}>

        <View style={styles.container1}>
         
            <Text style={styles.text1}>Forgot password</Text>

         <View style={styles.container2}>
            <CustomInput 
            placeholder='Username'
            value={username}
            setValue={setUsername}
            />

            <CustomButton text="Send" onPress={onSendPressed}/>

            <CustomButton text="Back to Sign In." onPress={onBackToSignInPressed} type="TERTIARY"/>
            
         </View>
    
        </View>


        </View>
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
        paddingTop: 10,
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