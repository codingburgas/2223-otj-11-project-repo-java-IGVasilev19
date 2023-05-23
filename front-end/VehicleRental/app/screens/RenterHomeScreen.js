import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  StatusBar,
  FlatList,
} from "react-native";
import {
  Box,
  HStack,
  Menu,
  Pressable,
  Center,
  useColorModeValue,
  Button,
  Icon,
} from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap } from "react-native-tab-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useCore } from "../providers/CoreProvider";

function RenterHomeScreen() {
  const navigation = useNavigation();
  const { user, setUser } = useCore();
  const { vehicle, setVehicle } = useCore();

  const onAccountPressed = () => {
    navigation.navigate("Account");
  };

  const onSignOutPressed = () => {
    navigation.navigate("Sign In");
  };

  const onShowDetailsPressed = (item) => {
    setVehicle(item);
    navigation.navigate("RenterVehicleDetails");
  };

  const onGaragePressed = () =>{
    navigation.navigate("RentedVehicles");
  };

  const FirstRoute = () => (
    <Center my="5">
      <FlatList
        data={vehicles}
        renderItem={({ item }) =>
          item.vehicle_type == "Car" && item.is_rented == 0 ? (
            <TouchableOpacity
              key={item.id}
              onPress={() => onShowDetailsPressed(item)}
            >
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
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
          item.vehicle_type == "Motorcycle" && item.is_rented == 0 ? (
            <TouchableOpacity key={item.id}>
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
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
          item.vehicle_type == "Boat" && item.is_rented == 0 ? (
            <TouchableOpacity key={item.id}>
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
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
          item.vehicle_type == "Plane" && item.is_rented == 0 ? (
            <TouchableOpacity key={item.id}>
              <Image
                style={styles.flatListImage}
                source={{ uri: item.image1 }}
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
          onPress={onGaragePressed}
        >
          <MaterialCommunityIcons name="garage-variant" size={35} color="white" />
        </Button>
      </Center>
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
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 55,
    bottom: 30
  },
});
export default RenterHomeScreen;
