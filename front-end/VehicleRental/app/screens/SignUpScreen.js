import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  useToast,
  Input,
  Pressable,
  Icon,
  VStack,
  HStack,
  Box,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import * as ImagePicker from "expo-image-picker";

function SignUpScreen(props) {
  const notify = useToast();

  const [show1, setShow1] = useState(false);

  const [show2, setShow2] = useState(false);

  const id = "notify";

  const [first_name, setFirstName] = useState("");

  const [last_name, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [date_of_birth, setDateOfBirth] = useState("");

  const [user_type, setUserType] = useState("");

  const [country, setCountry] = useState("");

  const [city, setCity] = useState("");

  const [address, setAddress] = useState("");

  const [phone_num, setPhoneNumber] = useState("");

  const [post_code, setPostCode] = useState("");

  const [profile_pic, setProfilePic] = useState("");

  const userTypes = ["Owner", "Renter"];

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate("Sign In");
  };

  const onSignUpWithFacebookPressed = () => {
    console.warn("Sign up With Facebook");
  };

  const onSignUpWithGooglePressed = () => {
    console.warn("Sign in with Google");
  };

  const onSignUpPressed = async () => {
    if (password == confirmPassword) {
      const user = {
        user_type,
        first_name,
        last_name,
        username,
        email,
        password,
        date_of_birth,
        country,
        city,
        address,
        phone_num,
        post_code,
        profile_pic,
      };

      const res = await fetch("http://192.168.1.5:8080/user/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        if (!notify.isActive(id)) {
          return notify.show({
            id,
            title: "User already exist!",
            avoidKeyboard: true,
            duration: 3000,
            buttonStyle: { backgroundColor: "#5cb85c" },
          });
        }
      } else {
        navigation.navigate("Confirm email");
      }
    } else {
      if (!notify.isActive(id)) {
        return notify.show({
          id,
          title: "Passwords don't match!",
          avoidKeyboard: true,
          duration: 3000,
          buttonStyle: { backgroundColor: "#5cb85c" },
        });
      }
    }
  };

  const imagePick = async (pos) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need media library permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      flex: 1,
      height: 200,
      width: 200,
      quality: 1,
    });

    setProfilePic(result.assets[0].uri);

    if (result.canceled) {
      return;
    }
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms of use");
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy policy");
  };

  return (
    <Box style={styles.root}>
      <VStack style={styles.container1}>
        <Text style={styles.text1}>Sign Up</Text>

        <ScrollView
          style={styles.container2}
          showsVerticalScrollIndicator={false}
        >
          <VStack
            space={2}
            alignItems={"center"}
            paddingTop={3}
            paddingBottom={7}
          >
            <Text style={styles.text2}>
              By registering, you confirm that you accept our{" "}
              <Text style={styles.link} onPress={onTermsOfUsePressed}>
                Terms of Use
              </Text>{" "}
              and{" "}
              <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
                Privacy Policy
              </Text>
            </Text>

            <TouchableOpacity onPress={imagePick}>
              <Image
                style={styles.image}
                source={
                  profile_pic
                    ? { uri: profile_pic }
                    : require("../assets/images/user.png")
                }
              />
              <Box style={{ alignItems: "flex-end", top: -18 }}>
                <Entypo name="pencil" size={20} color="white" />
              </Box>
            </TouchableOpacity>

            <HStack space={2}>
              <Input
                placeholder="Firstname"
                w={"41%"}
                color={"white"}
                value={first_name}
                onChangeText={setFirstName}
                placeholderTextColor="white"
              />

              <Input
                placeholder="Lastname"
                w={"41%"}
                color={"white"}
                value={last_name}
                onChangeText={setLastName}
                placeholderTextColor="white"
              />
            </HStack>

            <Input
              placeholder="Username"
              w={"85%"}
              color={"white"}
              value={username}
              onChangeText={setUsername}
              placeholderTextColor="white"
            />

            <Input
              placeholder="Email"
              color={"white"}
              w={"85%"}
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="white"
            />

            <Input
              color={"white"}
              isRequired={true}
              minLength={8}
              maxLength={16}
              value={password}
              onChangeText={setPassword}
              placeholder={"Password"}
              keyboardType={"password"}
              returnKeyType={"done"}
              placeholderTextColor="white"
              w={"85%"}
              type={show1 ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow1(!show1)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show1 ? "visibility-off" : "visibility"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
            />

            <Input
              color={"white"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder={"Password"}
              keyboardType={"password"}
              returnKeyType={"done"}
              placeholderTextColor="white"
              w={"85%"}
              type={show2 ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow2(!show2)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show2 ? "visibility-off" : "visibility"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
            />
            <HStack space={2}>
              <TextInputMask
                type={"datetime"}
                placeholder="DateOfBirth"
                placeholderTextColor="white"
                color={"white"}
                options={{
                  format: "MM/DD/YYYY",
                }}
                value={date_of_birth}
                onChangeText={setDateOfBirth}
                style={{
                  borderWidth: 0.8,
                  borderColor: "white",
                  borderRadius: 4,
                  width: "41%",
                  paddingHorizontal: 10,
                  fontSize: 12,
                }}
              />
              <SelectDropdown
                data={userTypes}
                onSelect={(index) => {
                  setUserType(index);
                }}
                defaultButtonText={"User type"}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <FontAwesome
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      color={"white"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </HStack>
            <HStack space={2}>
              <Input
                placeholder="Country"
                color={"white"}
                w={"41%"}
                value={country}
                onChangeText={setCountry}
                placeholderTextColor="white"
              />

              <Input
                placeholder="City"
                color={"white"}
                w={"41%"}
                value={city}
                onChangeText={setCity}
                placeholderTextColor="white"
              />
            </HStack>

            <Input
              placeholder="Address"
              color={"white"}
              w={"85%"}
              value={address}
              onChangeText={setAddress}
              placeholderTextColor="white"
            />

            <HStack space={2}>
              <Input
                color={"white"}
                placeholder="PhoneNumber"
                w={"41%"}
                value={phone_num}
                onChangeText={setPhoneNumber}
                keyboardType={"phone-pad"}
                placeholderTextColor="white"
              />

              <Input
                color={"white"}
                placeholder="PostCode"
                w={"41%"}
                value={post_code}
                onChangeText={setPostCode}
                keyboardType={"numeric"}
                placeholderTextColor="white"
              />
            </HStack>

            <Button w="85%" onPress={onSignUpPressed} bgColor="darkBlue.600">
              Sign Up
            </Button>

            <Button
              w="85%"
              onPress={onSignUpWithFacebookPressed}
              bgColor="blue.100"
              _text={{ color: "blue.500" }}
            >
              Sign in with Facebook
            </Button>

            <Button
              w="85%"
              onPress={onSignUpWithGooglePressed}
              bgColor="red.200"
              _text={{ color: "red.400" }}
            >
              Sign in with Google
            </Button>

            <Button
              w="85%"
              onPress={onSignInPressed}
              _text={{ color: "trueGray.500" }}
              variant="link"
            >
              Already have an account? Sign In.
            </Button>
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181A1A",
    paddingBottom: 100,
  },
  container1: {
    flex: 1,
    alignItems: "center",
    top: 40,
    margin: 15,
  },
  container2: {
    top: 30,
    width: "85%",
    backgroundColor: "#363636",

    borderColor: "#363636",
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: "white",
    borderWidth: 3,
  },
  text1: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  text2: {
    color: "grey",
    marginVertical: 10,
    width: "85%",
    left: 10,
  },
  link: {
    color: "#3B71F3",
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 55,
  },
  dropdown1BtnStyle: {
    width: "41%",
    backgroundColor: "#363636",
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: "white",
  },
  dropdown1BtnTxtStyle: { color: "white", textAlign: "left", fontSize: 13 },
  dropdown1DropdownStyle: {
    backgroundColor: "#363636",
    borderRadius: 4,
    borderTopWidth: 0.8,
    borderColor: "white",
  },
  dropdown1RowStyle: { backgroundColor: "#363636" },
  dropdown1RowTxtStyle: { color: "white", textAlign: "left" },
});

export default SignUpScreen;
