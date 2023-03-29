import { Text, StyleSheet, Dimensions, Image } from "react-native";
import { Box, HStack, Menu, Pressable } from "native-base";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Tabs from "../components/Tabs";
import { useCore } from "../providers/CoreProvider";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useCore();

  const onAccountPressed = () => {
    navigation.navigate("Account");
  };

  const onSignOutPressed = () =>{
    navigation.navigate("Sign In");
  };

  return (
    <Box style={styles.root}>
      <HStack top={12} space={115} alignItems="center" justifyContent="center">
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
          ITravelPrivate
        </Text>

        <Menu
          style={{ backgroundColor: "#363636" }}
          top={10}
          w="105"
          placement={"bottom right"}
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <Box style={styles.imgContainer}>
                  <Image
                    style={styles.image}
                    source={ user.profile_pic ? { uri: user.profile_pic } : require("../assets/images/user.png")}
                  />
                </Box>
              </Pressable>
            );
          }}
        >
          <Menu.Item onPress={onAccountPressed}>
            <Text style={{ color: "white" }}>Account</Text>
          </Menu.Item>
          <Menu.Item onPress={onSignOutPressed}>
            <Text style={{ color: "white" }}>Sign out</Text>
          </Menu.Item>
        </Menu>
      </HStack>
      <Tabs key="HomeScreen"/>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181A1A",
  },
  accountContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 55,
    borderColor: "white",
    borderWidth: 3,
  },
});
export default HomeScreen;
