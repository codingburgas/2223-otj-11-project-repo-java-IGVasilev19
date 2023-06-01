import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Box, VStack, Input } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { useCore } from "../providers/CoreProvider";

function AccountScreen (props){
  const { user, setUser } = useCore();

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

    if (result.canceled) return;

    const res = await fetch("http://192.168.1.4:8080/user/setProfilePic", {
      method: "POST",
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        profile_pic: result.assets[0].uri,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const usr = await res.json();

    setUser(usr);
  };

  return (
    <Box style={styles.root}>
      <VStack top={50} alignItems="center" space={5}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          My account info
        </Text>
        <Box>
          <TouchableOpacity onPress={imagePick}>
            <Image
              style={styles.image}
              source={
                user.profile_pic
                  ? { uri: user.profile_pic }
                  : require("../assets/images/user.png")
              }
              resizeMode="contain"
            />
            <Box style={{ alignItems: "flex-end", top: -18 }}>
              <Entypo name="pencil" size={20} color="white" />
            </Box>
          </TouchableOpacity>
        </Box>
        <Input
          placeholder={"Username: " + user.username}
          selectionColor="white"
          color={"white"}
          w={"65%"}
          placeholderTextColor="white"
          editable={false}
        />
        <Input
          placeholder={"Email: " + user.email}
          selectionColor="white"
          color={"white"}
          w={"65%"}
          placeholderTextColor="white"
          editable={false}
        />
        <Input
          placeholder={"Password: " + user.password}
          selectionColor="white"
          color={"white"}
          w={"65%"}
          placeholderTextColor="white"
          editable={false}
        />
        <Input
          placeholder={"Phone number: " + user.phone_num}
          selectionColor="white"
          color={"white"}
          w={"65%"}
          placeholderTextColor="white"
          editable={false}
        />
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181A1A",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: "white",
    borderWidth: 3,
  },
});

export default AccountScreen;
