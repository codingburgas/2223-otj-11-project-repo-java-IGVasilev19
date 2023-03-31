import { Text, StyleSheet, Image } from "react-native";
import {
  Box,
  HStack,
  Menu,
  Pressable,
  Center,
  Modal,
  FormControl,
  Input,
  Button,
  Icon,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Tabs from "../components/Tabs";
import { useCore } from "../providers/CoreProvider";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useCore();
  const [showModal, setShowModal] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const onAccountPressed = () => {
    navigation.navigate("Account");
  };

  const onSignOutPressed = () => {
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
                <Box>
                  <Image
                    style={styles.image}
                    source={
                      user.profile_pic
                        ? { uri: user.profile_pic }
                        : require("../assets/images/user.png")
                    }
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
      <Tabs key="HomeScreen" />
      <Center>
        <Button
          style={styles.addButton}
          left={140}
          bgColor="darkBlue.600"
          onPress={() => setShowModal(true)}
        >
          <Icon color="white" as={AntDesign} name="plus" size="7" />
        </Button>
        <Modal
          width="100%"
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >
          <Modal.Content
            style={{ backgroundColor: "#363636" }}
            maxWidth="400px"
          >
            <Modal.CloseButton />
            <Modal.Header style={{ backgroundColor: "#363636" }}>
              <Text style={{ color: "white", fontSize: 20 }}>
                Add a new vehicle
              </Text>
            </Modal.Header>
            <Modal.Body>
              <HStack space={2}>
                <Input
                  placeholder="Brand"
                  selectionColor="white"
                  color={"white"}
                  w={"49%"}
                  value={brand}
                  onChangeText={setBrand}
                  placeholderTextColor="white"
                />

                <Input
                  right={1}
                  placeholder="Model"
                  selectionColor="white"
                  color={"white"}
                  w={"49%"}
                  value={model}
                  onChangeText={setModel}
                  placeholderTextColor="white"
                />
              </HStack>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#363636" }}>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
      ;
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
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 55,
  },
});
export default HomeScreen;
