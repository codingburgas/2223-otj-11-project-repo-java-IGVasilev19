import { View, Text, StyleSheet, FlatList } from "react-native";
import { Box, Button, VStack, useToast } from "native-base";
import { useCore } from "../providers/CoreProvider";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

const RenterVehicleDetailScreen = () => {
  const { vehicle } = useCore();
  const { user } = useCore();
  const navigation = useNavigation();
  const notify = useToast();
  const id = "notify";

  const onRentVehiclePressed = async () => {
    const res = await fetch("http://192.168.1.5:8080/vehicle/rent", {
      method: "POST",
      body: JSON.stringify({
        vin: vehicle.vin,
        username: user.username
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      navigation.navigate("RenterHome");
      if (!notify.isActive(id)) {
        return notify.show({
          id,
          title: "Vehicle rented successfully!",
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
        <FlatList data={vehicle} />
        <Box style={styles.container2}>
          <VStack alignItems={"center"} space={3}>
            <Text>{vehicle.additional_info}</Text>
            <Button
              w="85%"
              onPress={onRentVehiclePressed}
              bgColor="darkBlue.600"
            >
              Rent vehicle
            </Button>
          </VStack>
        </Box>
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
});

export default RenterVehicleDetailScreen;
