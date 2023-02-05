import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

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
    <View style={styles.root}>
        <View style={styles.container1}>
         
            <Text style={styles.text1}>Confirm your email</Text>

         <View style={styles.container2}>
            <CustomInput 
            placeholder='Enter your confirmation code'
            value={code}
            setValue={setCode}
            />

            <CustomButton text="Confirm" onPress={onConfirmPressed}/>
            
          <View style={{flexDirection: 'row', width: "60%", right: 70}}>
            <CustomButton text="Resend code" onPress={onResendCodePressed} type="TERTIARY"/>

            <CustomButton text="Back to Sign In." onPress={onBackToSignInPressed} type="TERTIARY"/>
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

export default ConfirmEmailScreen;