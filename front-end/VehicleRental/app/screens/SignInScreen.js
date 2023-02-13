import React, {useState} from 'react';
import {  StyleSheet, View, Text, ToastAndroid } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';

function SignInScreen(props) {
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser]= useState('');

    const navigation = useNavigation();

    const  onSignInPressed = async () =>{
        if(value.includes("@")==true && value.includes(".com")==true)
        {
            const res = await fetch("http://192.168.1.5:8080/user/getByEmail", {
            method: "POST",
            body: JSON.stringify({
            email: value,
            password: password,
            }),
            headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) return ToastAndroid.show("User doesn't exist!", ToastAndroid.TOP);;

            const user = await res.json();

            setUser(user);

            if(value==user.email)
            {
                navigation.navigate('Home')
            }
        }
        else{
            const res = await fetch("http://192.168.1.5:8080/user/getByUsername", {
            method: "POST",
            body: JSON.stringify({
            username: value,
            password: password,
            }),
            headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) return ToastAndroid.show("User doesn't exist!", ToastAndroid.TOP);;

            const user = await res.json();

            setUser(user);

            if(value==user.username)
            {
                navigation.navigate('Home')
            }
        }
    };

    const onSignInWithFacebookPressed = () =>{
        console.warn("Sign in With Facebook");
    };

    const onSignInWithGooglePressed = () =>{
        console.warn("Sign in with Google");
    };

    const onForgotPasswordPressed = () =>{
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPressed = () =>{
        navigation.navigate('Sign Up');
    };

    return (
        <View style={styles.root}>

        <View style={styles.container1}>

            <Text style={styles.text1}>Welcome to "I Travel Private"</Text>

            <Text style={styles.text2}>Sign in into your account to enlist or rent a vehicle!</Text>

         

            <View style={styles.container2}> 

            <View style={{paddingHorizontal: 12, left:2}}>
            <CustomInput 
            placeholder='Username\Email'
            fgColor="#FFFFFF"
            value={value}
            setValue={setValue}
            />

            <CustomInput 
            placeholder='Password'
            fgColor="#FFFFFF"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            />
            </View>

            <View style={{paddingLeft: 25}}>
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
        alignItems: "center",
        top: 50,
        margin: 15,
    },
    container2: {
        top:30,
        width:"80%",
        backgroundColor: "#363636",

        borderColor: "#363636",
        borderWidth: 1,
        borderRadius: 5,

        paddingTop: 10,
        paddingBottom: 10,
    },
    text1: {
        fontSize:28,
        color: "white",
        fontWeight: "bold"
    },
    text2: {
        fontSize:14,
        color: "white",
    }
})

export default SignInScreen;