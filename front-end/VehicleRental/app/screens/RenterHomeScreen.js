import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
  VStack,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Tabs from "../components/Tabs";
import { useCore } from "../providers/CoreProvider";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useCore();
  const [showModal, setShowModal] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [vin, setVin] = useState("");
  const owner = user.username;
  const [vehicle_type, setVehicleType] = useState("");
  const [price_per_day, setPricePerDay] = useState("");
  const [additional_info, setAdditionalInfo] = useState("");
  const vehicleTypes = ["Car", "Motorcycle", "Boat", "Plane"];

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
      <Tabs key="RenterHomeScreen" />
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
