import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Input, VStack, Box, Button, Pressable, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

function ResetPasswordScreen(props) {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    //validation for new password
    navigation.navigate("Sign In");
  };

  return (
    <Box style={styles.root}>
      <VStack style={styles.container1}>
        <Text style={styles.text1}>Reset password</Text>

        <VStack style={styles.container2} space={2} top={2}>
          <Input
            placeholder="Code"
            placeholderTextColor="white"
            value={code}
            setValue={setCode}
          />

          <Input
            color={"white"}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder={"Enter new password"}
            keyboardType={"password"}
            returnKeyType={"done"}
            placeholderTextColor="white"
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility-off" : "visibility"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />

          <Button w="100%" onPress={onSubmitPressed} bgColor="darkBlue.600">
            Submit
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181A1A",
  },
  container1: {
    flex: 1,
    alignItems: "center",

    top: 40,
    margin: 15,
  },
  container2: {
    alignItems: "center",
    top: 30,
    width: "85%",
    backgroundColor: "#363636",

    borderColor: "#363636",
    borderWidth: 1,
    borderRadius: 5,

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  text1: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
});

export default ResetPasswordScreen;
