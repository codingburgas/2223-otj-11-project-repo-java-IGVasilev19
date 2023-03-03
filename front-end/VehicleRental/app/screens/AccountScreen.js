import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Box, VStack } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";

const AccountScreen = (props) => {
  const [image, setImage] = useState(null);

  const imagePick = async () => {
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
    setImage(image);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box style={styles.root}>
      <VStack top={50} alignItems="center" space={5}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          My account info
        </Text>
        <Box style={styles.imgContainer}>
          <TouchableOpacity onPress={imagePick}>
            <Image
              style={styles.image}
              source={
                image ? { uri: image } : require("../assets/images/user.png")
              }
            />
            <Box style={{ alignItems: "flex-end", top: -18 }}>
              <Entypo name="pencil" size={20} color="white" />
            </Box>
          </TouchableOpacity>
        </Box>
        <Box style={styles.textContainer}></Box>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181A1A",
  },
  imgContainer: {},
  textContainer: {},
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: "white",
    borderWidth: 3,
  },
});

export default AccountScreen;
