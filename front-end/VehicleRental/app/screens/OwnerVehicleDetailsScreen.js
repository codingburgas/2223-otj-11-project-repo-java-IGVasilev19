import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Box, Button, VStack, useToast, Input } from "native-base";
import { useCore } from "../providers/CoreProvider";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

const OwnerVehicleDetailScreen = () => {
  const navigation = useNavigation();
  const { vehicle, setVehicle } = useCore();
  const notify = useToast();
  const id = "notify";
  const data = [
    vehicle.image1,
    vehicle.image2,
    vehicle.image3,
    vehicle.image4,
    vehicle.image5,
    vehicle.image6,
  ];
  const { width } = useWindowDimensions();

  const onDeleteVehiclePressed = async () => {
    const res = await fetch("http://192.168.1.4:8080/vehicle/delete", {
      method: "DELETE",
      body: JSON.stringify({
        vin: vehicle.vin,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      navigation.navigate("OwnerHome");
      if (!notify.isActive(id)) {
        return notify.show({
          id,
          title: "Vehicle deleted successfully!",
          avoidKeyboard: true,
          duration: 3000,
          buttonStyle: { backgroundColor: "#5cb85c" },
        });
      }
    }
  };

  return (
    <Box style={styles.root}>
      <Box style={styles.container1}>
        <Text style={styles.text1}>Vehicle details</Text>
        <Box style={styles.container2}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width: 326.5, aspectRatio: 1, borderRadius: 5 }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </Box>
        <ScrollView style={styles.container3}>
          <VStack alignItems={"center"} space={3}>
            <Text style={styles.title}>
              {vehicle.brand} {vehicle.model}
            </Text>
            <Input
              placeholder={"Price per day: " + vehicle.price_per_day}
              selectionColor="white"
              color={"white"}
              w={"85%"}
              placeholderTextColor="white"
              editable={false}
            />
            <Input
              placeholder={"Additional info: " + vehicle.additional_info}
              selectionColor="white"
              color={"white"}
              w={"85%"}
              placeholderTextColor="white"
              editable={false}
            />
            <Input
              placeholder={"Currently rented by: " + vehicle.renter}
              selectionColor="white"
              color={"white"}
              w={"85%"}
              placeholderTextColor="white"
              editable={false}
            />
            <Button
              w="85%"
              onPress={onDeleteVehiclePressed}
              bgColor="error.700"
            >
              Delete vehicle
            </Button>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181A1A",
  },
  container1: {
    alignItems: "center",
    top: 50,
    margin: 15,
    alignItems: "center",
  },
  container2: {
    top: 20,
    width: "90%",
  },
  container3: {
    top: 30,
    width: "90%",
    backgroundColor: "#363636",

    borderColor: "#363636",
    borderWidth: 1,
    borderRadius: 5,

    paddingTop: 20,
    paddingBottom: 20,
  },
  text1: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
});

export default OwnerVehicleDetailScreen;
