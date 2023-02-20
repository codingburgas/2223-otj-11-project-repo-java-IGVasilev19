import React, {useState} from 'react';
import { useToast, Box, Input,VStack, Icon, Pressable, Button, FormControl, WarningOutlineIcon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import {  StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignInScreen(props) {
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser]= useState('');
    const notify = useToast();
    const [show, setShow] = useState(false);
    const id="notify";
    const navigation = useNavigation();

    const  onSignInPressed = async () =>{
        if(!value=="" && !password=="")
        {
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
                        return notify.show({id, title: "User with this email or password doesn't exist", avoidKeyboard:true, duration: 3000, buttonStyle: { backgroundColor: "#5cb85c" }});;
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
                        return notify.show({id, title: "User with this username or password doesn't exist", avoidKeyboard:true, duration: 3000});;
                    }
                }

                const user = await res.json();

                setUser(user);

                if(value==user.username)
                {
                    navigation.navigate('Home')
                }
            }
        }
        else
        {
            if(!notify.isActive(id)){
            return notify.show({id, title: "Please input your username and/or password!", avoidKeyboard:true, duration: 3000});
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

            <VStack alignItems={"center"} space={3}>
            <Input 
            placeholder='Username\Email'
            selectionColor="white"
            color={"white"}
            w={"85%"}
            value={value}
            onChangeText={setValue}
            placeholderTextColor="white"
            />

            <Input 
            color={"white"}
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            keyboardType={"password"}
            returnKeyType={"done"}
            placeholderTextColor="white"
            w={"85%"} 
            type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility-off" : "visibility"} />} size={5} mr="2" color="muted.400" />
            </Pressable>}   
            />
           
            <Button w="85%" onPress={onSignInPressed} bgColor="darkBlue.600">Sign In</Button>

            <Button w="85%" onPress={onSignInWithFacebookPressed} bgColor="blue.100" _text={{color:"blue.500"}}>Sign in with Facebook</Button>

            <Button w="85%" onPress={onSignInWithGooglePressed} bgColor="red.200" _text={{color:"red.400"}}>Sign in with Google</Button>
            
            <Button w="85%" onPress={onForgotPasswordPressed} _text={{color:"trueGray.500"}} variant="link">Forgot password?</Button>

            <Button w="85%" onPress={onSignUpPressed} _text={{color:"trueGray.500"}} variant="link">Don't have an account? Sign Up</Button>
            </VStack>

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

        paddingTop: 20,
        paddingBottom:20
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