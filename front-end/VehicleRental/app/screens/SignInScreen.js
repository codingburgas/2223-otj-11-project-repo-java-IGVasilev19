import React, {useState} from 'react';
import {  StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function SignInScreen(props) {
    const [FirstName, setFirstName] = useState('');

    const [LastName, setLastName] = useState('');

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const onSignInPressed = () =>{
        console.warn("Sign In");
    };

    const onSignInWithFacebookPressed = () =>{
        console.warn("Sign in With Facebook");
    };

    const onSignInWithGooglePressed = () =>{
        console.warn("Sign in with Google");
    };

    const onForgotPasswordPressed = () =>{
        console.warn("Forgot password");
    };

    const onSignUpPressed = () =>{
        console.warn("Sign Up");
    };

    return (
        <View style={styles.container1}>

            <Text style={styles.text1}>Welcome to "I Travel Private"</Text>

            <Text style={styles.text2}>Sign in into your account to enlist or rent a vehicle!</Text>

         

            <View style={styles.container2}> 

            <CustomInput 
            placeholder='Username'
            fgColor="#FFFFFF"
            value={username}
            setValue={setUsername}
            />

            <CustomInput 
            placeholder='Password'
            fgColor="#FFFFFF"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton text="Sign In" onPress={onSignInPressed}/>

            <CustomButton 
            text="Sign in with Facebook" 
            onPress={onSignInWithFacebookPressed}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            />

            <CustomButton 
            text="Sign in with Google"
            onPress={onSignInWithGooglePressed}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            />
            
            <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

            <CustomButton text="Don't have an account? Sign Up." onPress={onSignUpPressed} type="TERTIARY"/>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        alignItems: "center",
        top: 120,
        margin: 15,
    },
    container2: {
        top:30,
        width:"80%",
        backgroundColor: "#363636",

        borderColor: "#363636",
        borderWidth: 1,
        borderRadius: 5,

        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    text1: {
        fontSize:25,
        color: "white",
        fontWeight: "bold"
    },
    text2: {
        fontSize:12,
        color: "white",
    }
})

export default SignInScreen;