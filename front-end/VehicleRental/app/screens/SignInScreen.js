import React, {useState} from 'react';
import { useToast, Box, Input,Stack, Icon, Pressable } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import {  StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

function SignInScreen(props) {
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser]= useState('');
    const notify = useToast();
    const [show, setShow] = React.useState(false);
    const id="notify";
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

            if (!res.ok){
                if(!notify.isActive(id)){
                    return notify.show({id, title: "User doesn't exist", avoidKeyboard:true, duration: 3000, buttonStyle: { backgroundColor: "#5cb85c" }});;
                }
            } 

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

            if (!res.ok){
                if(!notify.isActive(id)){
                    return notify.show({id, title: "User doesn't exist", avoidKeyboard:true, duration: 3000});;
                }
            }

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
        <Box style={styles.root}>

        <Box style={styles.container1}>

            <Text style={styles.text1}>Welcome to "I Travel Private"</Text>

            <Text style={styles.text2}>Sign in into your account to enlist or rent a vehicle!</Text>

         

            <Box style={styles.container2}> 

            <Box style={{paddingHorizontal: 12, left:2, marginVertical: 10}}>
            <Input 
            placeholder='Username\Email'
            w={"90%"}
            left={2.5}
            value={value}
            setValue={setValue}
            placeholderTextColor="white"
            />

            <Input 
            color={"white"}
            left={2.5}
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            keyboardType={"password"}
            returnKeyType={"done"}
            placeholderTextColor="white"
            w={"90%"} 
            type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility-off" : "visibility"} />} size={5} mr="2" color="muted.400" />
            </Pressable>}   
            />

            </Box>

            <Box style={{paddingLeft: 25}}>
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
            </Box>

            </Box>

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
    },
})

export default SignInScreen;