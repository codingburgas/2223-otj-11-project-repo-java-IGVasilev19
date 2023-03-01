import { View, Text, StyleSheet } from "react-native";
import {
  Box,
  Button,
  HStack,
  Menu,
  Pressable,
  VStack,
  Image,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";

const AccountScreen = () => {
  const [image, setImage] = useState(null);

  const onEditPressed = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box style={styles.root}>
      <VStack top={50} alignItems="center" space={5}>
        <Text style={{ color: "white", fontSize: 25 }}>
          This is account screen
        </Text>
        {/* <FontAwesome name="user-circle" size={120} color="white" /> */}
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Button bgColor="muted.600" onPress={onEditPressed}>
          <Text style={{ color: "white", fontWeight: "bold" }}>+ Edit</Text>
        </Button>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181A1A",
  },
});

export default AccountScreen;
