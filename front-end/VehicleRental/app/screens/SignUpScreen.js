import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function SignUpScreen(props) {
    const [first_name, setFirstName] = useState('');

    const [last_name, setLastName] = useState('');

    const [email, setEmail] = useState('');

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [date_of_birth, setDateOfBirth] = useState('');

    const [country, setCountry] = useState('');

    const [city, setCity] = useState('');

    const [address, setAddress] = useState('');

    const [phone_num, setPhoneNumber] = useState('');

    const [post_code, setPostCode] = useState('');
    
    const navigation = useNavigation();

    const onSignInPressed = () =>{
        navigation.navigate('Sign In');
    };

    const onSignUpWithFacebookPressed = () =>{
        console.warn("Sign up With Facebook");
    };

    const onSignUpWithGooglePressed = () =>{
        console.warn("Sign in with Google");
    };

    const onSignUpPressed = () =>{
        if(password==confirmPassword)
        {
            const user = { first_name,last_name,username,email,password,date_of_birth,country,city,address,phone_num,post_code };
            fetch('http://192.168.1.5:8080/user/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            })
            .then(() => {
            console.log('New user added');
            })
            .catch(error => console.error(error));

            navigation.navigate('Confirm email');
        }
        else
        {
            console.warn("Passwords don't match!")
        }
        
    };

    const onTermsOfUsePressed = () =>{
        console.warn("Terms of use");
    };

    const onPrivacyPolicyPressed = () =>{
        console.warn("Privacy policy");
    };

    return (
        <View style={styles.root}>

        <View style={styles.container1}>
         
            <Text style={styles.text1}>Sign Up</Text>        

            <ScrollView style={styles.container2} contentContainerStyle={{alignItems: "center", paddingBottom: 80}} showsVerticalScrollIndicator={false}>

            <Text style={styles.text2}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

            <View style={{flexDirection: 'row', width: "45%", right: 70}}>
            <CustomInput 
            placeholder='FirstName'
            returnKeyType={"next"}
            value={first_name}
            setValue={setFirstName}
            />

            <CustomInput 
            placeholder='LastName'
            returnKeyType={"next"}
            value={last_name}
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
            value={date_of_birth}
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
            value={phone_num}
            setValue={setPhoneNumber}
            />

            <CustomInput
            placeholder='PostCode'
            returnKeyType={"done"}
            keyboardType={"numeric"}
            value={post_code}
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