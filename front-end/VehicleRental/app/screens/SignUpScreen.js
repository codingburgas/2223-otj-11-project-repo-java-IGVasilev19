import React, {useState} from 'react';
import {  StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function SignUpScreen(props) {
    const [FirstName, setFirstName] = useState('');

    const [LastName, setLastName] = useState('');

    const [email, setEmail] = useState('');

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [dateOfBirth, setDateOfBirth] = useState('');

    const [country, setCountry] = useState('');

    const [city, setCity] = useState('');

    const [address, setAddress] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

    const [postCode, setPostCode] = useState('');

    const onSignInPressed = () =>{
        console.warn("Sign In page");
    };

    const onSignUpWithFacebookPressed = () =>{
        console.warn("Sign up With Facebook");
    };

    const onSignUpWithGooglePressed = () =>{
        console.warn("Sign in with Google");
    };

    const onSignUpPressed = () =>{
        console.warn("Sign Up");
    };

    const onTermsOfUsePressed = () =>{
        console.warn("Terms of use");
    };

    const onPrivacyPolicyPressed = () =>{
        console.warn("Privacy policy");
    };

    return (
        <View style={styles.container1}>
         
            <Text style={styles.text1}>Sign Up</Text>        

            <ScrollView style={styles.container2} contentContainerStyle={{alignItems: "center", paddingTop: 80, paddingBottom: 80}} showsVerticalScrollIndicator={false}>

            <Text style={styles.text2}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

            <View style={{flexDirection: 'row', width: "45%", right: 70}}>
            <CustomInput 
            placeholder='FirstName'
            returnKeyType={"next"}
            value={FirstName}
            setValue={setFirstName}
            />

            <CustomInput 
            placeholder='LastName'
            returnKeyType={"next"}
            value={LastName}
            setValue={setLastName}
            /> 
            </View>

            <CustomInput 
            placeholder='Username'
            returnKeyType={"next"}
            value={username}
            setValue={setUsername}
            />

            <CustomInput 
            placeholder='Email'
            returnKeyType={"next"}
            keyboardType={"email-address"}
            value={email}
            setValue={setEmail}
            />

            <CustomInput 
            placeholder='Password'
            returnKeyType={"next"}
            keyboardType={"password"}
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomInput 
            placeholder='ConfirmPasssword'
            returnKeyType={"next"}
            keyboardType={"password"}
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
            />

            <CustomInput 
            placeholder='DateOfBirth'
            returnKeyType={"next"}
            value={dateOfBirth}
            setValue={setDateOfBirth}
            />

            <View style={{flexDirection: 'row', width: "45%", right: 70}}>
            <CustomInput 
            placeholder='Country'
            returnKeyType={"next"}
            value={country}
            setValue={setCountry}
            />

            <CustomInput 
            placeholder='City'
            returnKeyType={"next"}
            value={city}
            setValue={setCity}
            />
            </View>

            <CustomInput 
            placeholder='Address'
            returnKeyType={"next"}
            value={address}
            setValue={setAddress}
            />

            <View style={{flexDirection: 'row', width: "45%", right: 70}}>
            <CustomInput 
            placeholder='PhoneNumber'
            returnKeyType={"next"}
            keyboardType={"phone-pad"}
            value={phoneNumber}
            setValue={setPhoneNumber}
            />

            <CustomInput
            placeholder='PostCode'
            returnKeyType={"done"}
            keyboardType={"numeric"}
            value={postCode}
            setValue={setPostCode}
            />
            </View>

            <CustomButton text="Sign Up" onPress={onSignUpPressed}/>

            <CustomButton 
            text="Sign up with Facebook" 
            onPress={onSignUpWithFacebookPressed}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            />

            <CustomButton 
            text="Sign up with Google"
            onPress={onSignUpWithGooglePressed}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            />

            <CustomButton text="Already have an account? Sign In." onPress={onSignInPressed} type="TERTIARY"/>

            </ScrollView>
    
        </View>

    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: "center",
        top: 40,
        margin: 15,
    },
    container2: {
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

export default SignUpScreen;