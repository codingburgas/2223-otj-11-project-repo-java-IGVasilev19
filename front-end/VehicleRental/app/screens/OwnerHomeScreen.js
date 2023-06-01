import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated,
  FlatList,
} from "react-native";
import {
  Box,
  useToast,
  HStack,
  Menu,
  Pressable,
  Center,
  Modal,
  Input,
  Button,
  Icon,
  VStack,
  useColorModeValue,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInputMask } from "react-native-masked-text";
import { useCore } from "../providers/CoreProvider";
import React, { useEffect, useState } from "react";

function OwnerHomeScreen() {
  const navigation = useNavigation();
  const { user, setUser } = useCore();
  const { vehicle, setVehicle } = useCore();
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
  const notify = useToast();
  const id = "notify";

  const onAccountPressed = () => {
    navigation.navigate("Account");
  };

  const onSignOutPressed = () => {
    navigation.navigate("Sign In");
  };

  const onSavePressed = async () => {
    if (
      vehicle_type != "" &&
      brand != "" &&
      model != "" &&
      price_per_day != "" &&
      additional_info != "" &&
      vin != "" &&
      image1 != "" &&
      image2 != "" &&
      image3 != "" &&
      image4 != "" &&
      image5 != "" &&
      image6 != "" &&
      owner != ""
    ) {
      const vehicle = {
        vehicle_type,
        brand,
        model,
        price_per_day,
        additional_info,
        vin,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        owner,
      };
      const res = await fetch("http://192.168.1.4:8080/vehicle/add", {
        method: "POST",
        body: JSON.stringify(vehicle),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        if (!notify.isActive(id)) {
          return notify.show({
            id,
            title: "Vehicle already exist!",
            avoidKeyboard: true,
            duration: 3000,
            buttonStyle: { backgroundColor: "#5cb85c" },
          });
        }
      } else {
        setShowModal(false);
        setBrand("");
        setModel("");
        setPricePerDay("");
        setAdditionalInfo("");
        setVin("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setImage5("");
        setImage6("");
      }
    } else {
      if (!notify.isActive(id)) {
        return notify.show({
          id,
          title: "Please input all required information!",
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

    switch (pos) {
      case 1:
        setImage1(result.assets[0].uri);
        break;
      case 2:
        setImage2(result.assets[0].uri);
        break;
      case 3:
        setImage3(result.assets[0].uri);
        break;
      case 4:
        setImage4(result.assets[0].uri);
        break;
      case 5:
        setImage5(result.assets[0].uri);
        break;
      case 6:
        setImage6(result.assets[0].uri);
        break;
    }

    if (result.canceled) {
      return;
    }
  };

  const onShowDetailsPressed = (item) => {
    setVehicle(item);
    navigation.navigate("OwnerVehicleDatails");
  };

  const FirstRoute = () => (
    <Center my="5">
      <FlatList
        data={vehicles}
        renderItem={({ item }) =>
          item.vehicle_type == "Car" && item.owner == user.username ? (
            <TouchableOpacity
              key={item.id}
              onPress={() => onShowDetailsPressed(item)}
            >
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null
        }
        numColumns={2}
      />
    </Center>
  );

  const SecondRoute = () => (
    <Center my="5">
      <FlatList
        data={vehicles}
        renderItem={({ item }) =>
          item.vehicle_type == "Motorcycle" && item.owner == user.username ? (
            <TouchableOpacity
              key={item.id}
              onPress={() => onShowDetailsPressed(item)}
            >
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null
        }
        numColumns={2}
      />
    </Center>
  );

  const ThirdRoute = () => (
    <Center my="5">
      <FlatList
        data={vehicles}
        renderItem={({ item }) =>
          item.vehicle_type == "Boat" && item.owner == user.username ? (
            <TouchableOpacity
              key={item.id}
              onPress={() => onShowDetailsPressed(item)}
            >
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null
        }
        numColumns={2}
      />
    </Center>
  );

  const FourthRoute = () => (
    <Center my="5">
      <FlatList
        data={vehicles}
        renderItem={({ item }) =>
          item.vehicle_type == "Plane" && item.owner == user.username ? (
            <TouchableOpacity
              key={item.id}
              onPress={() => onShowDetailsPressed(item)}
            >
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null
        }
        numColumns={2}
      />
    </Center>
  );

  const initialLayout = {
    width: Dimensions.get("window").width,
  };
  const renderScene = SceneMap({
    0: FirstRoute,
    1: SecondRoute,
    2: ThirdRoute,
    3: FourthRoute,
  });

  const [vehicles, setVehicles] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 0,
      title: <FontAwesome5 name="car-side" size={26} color="#363636" />,
    },
    {
      key: 1,
      title: <FontAwesome5 name="motorcycle" size={26} color="#363636" />,
    },
    {
      key: 2,
      title: (
        <MaterialCommunityIcons name="sail-boat" size={26} color="#363636" />
      ),
    },
    {
      key: 3,
      title: <Ionicons name="airplane" size={26} color="#363636" />,
    },
  ]);

  async function getVehicles() {
    const res = await fetch("http://192.168.1.4:8080/vehicle/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return null;

    const vehRes = await res.json();

    setVehicles(vehRes);
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      getVehicles();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <HStack style={{ width: "80%", alignSelf: "center" }}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i ? "darkBlue.600" : useColorModeValue("#363636");
          return (
            <Box
              borderBottomWidth="4"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
              key={i}
            >
              <Animated.Text
                style={{
                  color,
                }}
              >
                {route.title}
              </Animated.Text>
            </Box>
          );
        })}
      </HStack>
    );
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
                    resizeMode="contain"
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
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{
          marginTop: StatusBar.currentHeight,
          top: 30,
        }}
      />
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
              <VStack space={2}>
                <HStack space={2}>
                  <SelectDropdown
                    data={vehicleTypes}
                    onSelect={(index) => {
                      setVehicleType(index);
                    }}
                    defaultButtonText={"Vehicle type"}
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
                  <Input
                    right={1}
                    placeholder="Brand"
                    selectionColor="white"
                    color={"white"}
                    w={"49%"}
                    value={brand}
                    onChangeText={setBrand}
                    placeholderTextColor="white"
                  />
                </HStack>
                <HStack space={2}>
                  <Input
                    placeholder="Model"
                    selectionColor="white"
                    color={"white"}
                    w={"49%"}
                    value={model}
                    onChangeText={setModel}
                    placeholderTextColor="white"
                  />

                  <TextInputMask
                    type={"money"}
                    placeholderTextColor="white"
                    placeholder="Price per day"
                    selectionColor="white"
                    color={"white"}
                    options={{
                      precision: 2,
                      separator: ",",
                      unit: "$",
                    }}
                    value={price_per_day}
                    onChangeText={setPricePerDay}
                    style={{
                      right: 4,
                      borderWidth: 0.8,
                      borderColor: "white",
                      borderRadius: 4,
                      width: "49%",
                      paddingHorizontal: 10,
                      fontSize: 12,
                    }}
                  />
                </HStack>
                <Input
                  multiline={true}
                  placeholder="Additional information"
                  selectionColor="white"
                  color={"white"}
                  w={"100%"}
                  value={additional_info}
                  onChangeText={setAdditionalInfo}
                  placeholderTextColor="white"
                />
                <TextInputMask
                  type={"only-numbers"}
                  maxLength={17}
                  placeholder="Vin"
                  selectionColor="white"
                  placeholderTextColor="white"
                  color={"white"}
                  value={vin}
                  onChangeText={setVin}
                  style={{
                    right: 4,
                    borderWidth: 0.8,
                    borderColor: "white",
                    borderRadius: 4,
                    width: "100%",
                    height: 47,
                    left: 0.5,
                    paddingHorizontal: 10,
                    fontSize: 12,
                  }}
                />
                <HStack
                  justifyContent={"center"}
                  alignItems={"center"}
                  space={1}
                >
                  <TouchableOpacity
                    onPress={() => {
                      imagePick(1);
                    }}
                  >
                    <Box
                      style={{
                        width: 85,
                        height: 85,
                        borderRadius: 4,
                        borderColor: "white",
                        borderWidth: 0.8,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {image1.length > 0 ? (
                        <Image
                          source={{ uri: image1 }}
                          style={styles.vehImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <>
                          <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="7"
                          />
                        </>
                      )}
                    </Box>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      imagePick(2);
                    }}
                  >
                    <Box
                      style={{
                        width: 85,
                        height: 85,
                        borderRadius: 4,
                        borderColor: "white",
                        borderWidth: 0.8,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {image2.length > 0 ? (
                        <Image
                          source={{ uri: image2 }}
                          style={styles.vehImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <>
                          <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="7"
                          />
                        </>
                      )}
                    </Box>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      imagePick(3);
                    }}
                  >
                    <Box
                      style={{
                        width: 85,
                        height: 85,
                        borderRadius: 4,
                        borderColor: "white",
                        borderWidth: 0.8,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {image3.length > 0 ? (
                        <Image
                          source={{ uri: image3 }}
                          style={styles.vehImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <>
                          <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="7"
                          />
                        </>
                      )}
                    </Box>
                  </TouchableOpacity>
                </HStack>
                <HStack
                  justifyContent={"center"}
                  alignItems={"center"}
                  space={1}
                >
                  <TouchableOpacity
                    accessibilityLabel="Image 4"
                    onPress={() => {
                      imagePick(4);
                    }}
                  >
                    <Box
                      style={{
                        width: 85,
                        height: 85,
                        borderRadius: 4,
                        borderColor: "white",
                        borderWidth: 0.8,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {image4.length > 0 ? (
                        <Image
                          source={{ uri: image4 }}
                          style={styles.vehImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <>
                          <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="7"
                          />
                        </>
                      )}
                    </Box>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      imagePick(5);
                    }}
                  >
                    <Box
                      style={{
                        width: 85,
                        height: 85,
                        borderRadius: 4,
                        borderColor: "white",
                        borderWidth: 0.8,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {image5.length > 0 ? (
                        <Image
                          source={{ uri: image5 }}
                          style={styles.vehImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <>
                          <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="7"
                          />
                        </>
                      )}
                    </Box>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      imagePick(6);
                    }}
                  >
                    <Box
                      style={{
                        width: 85,
                        height: 85,
                        borderRadius: 4,
                        borderColor: "white",
                        borderWidth: 0.8,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {image6.length > 0 ? (
                        <Image
                          source={{ uri: image6 }}
                          style={styles.vehImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <>
                          <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="7"
                          />
                        </>
                      )}
                    </Box>
                  </TouchableOpacity>
                </HStack>
              </VStack>
            </Modal.Body>
            <Modal.Footer
              style={{ backgroundColor: "#363636", justifyContent: "center" }}
            >
              <Button w="50%" onPress={onSavePressed} bgColor="darkBlue.600">
                Save
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
      ;
    </Box>
  );
}

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
  flatListImage: {
    width: 150,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 55,
    borderColor: "white",
    borderWidth: 3,
  },
  vehImage: {
    width: 83,
    height: 83,
    borderRadius: 4,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 55,
  },
  dropdown1BtnStyle: {
    width: "49%",
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
export default OwnerHomeScreen;
