import { TabView, SceneMap } from "react-native-tab-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Dimensions,
  StatusBar,
  Animated,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Box, Center, HStack, useColorModeValue } from "native-base";
import React, { useEffect, useState } from "react";

function Tabs() {
  const FirstRoute = () => (
    <Center my="4">
      {vehicles.map((vehicle) =>
        vehicle.vehicle_type == "Car" ? (
          <FlatList
            key={vehicle.id}
            data={vehicle.image1}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.image}/>
              </TouchableOpacity>
            )}
          />
        ) : null
      )}
    </Center>
  );

  const SecondRoute = () => (
    <Center my="4">
      {vehicles.map((item) =>
        item.vehicle_type == "Motorcycle" ? (
          <TouchableOpacity key={item.id}>
            <Image style={styles.image} source={{ uri: item.image1 }} />
          </TouchableOpacity>
        ) : null
      )}
    </Center>
  );

  const ThirdRoute = () => (
    <Center my="4">
      {vehicles.map((item) =>
        item.vehicle_type == "Boat" ? (
          <TouchableOpacity key={item.id}>
            <Image style={styles.image} source={{ uri: item.image1 }} />
          </TouchableOpacity>
        ) : null
      )}
    </Center>
  );

  const FourthRoute = () => (
    <Center my="4">
      {vehicles.map((item) =>
        item.vehicle_type == "Plane" ? (
          <TouchableOpacity key={item.id}>
            <Image style={styles.image} source={{ uri: item.image1 }} />
          </TouchableOpacity>
        ) : null
      )}
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
    const res = await fetch("http://192.168.1.5:8080/vehicle/get", {
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
  );
}

const styles = StyleSheet.create({
  image: {
    width: "20%",
    aspectRatio: 1,
  },
});

export default Tabs;
