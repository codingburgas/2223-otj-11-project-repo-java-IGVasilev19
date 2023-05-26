import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Box } from "native-base";
import { useCore } from "../providers/CoreProvider";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

const RentedVehiclesScreen = () => {
  const navigation = useNavigation();
  const { vehicle, setVehicle } = useCore();
  const { user } = useCore();
  const [vehicles, setVehicles] = useState([]);

  const onShowRentedDetailsPressed = (item) => {
    setVehicle(item);
    navigation.navigate("RentedVehicleDetails");
  };

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

  return (
    <Box style={styles.root}>
      <Box style={styles.container1}>
        <Text style={styles.text1}>Rented vehicles</Text>
        <Box style={styles.container2}>
          <FlatList
            data={vehicles}
            renderItem={({ item }) =>
              item.renter == user.username ? (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onShowRentedDetailsPressed(item)}
                >
                  <Image
                    style={styles.flatListImage}
                    source={{ uri: item.image1 }}
                  />
                </TouchableOpacity>
              ) : null
            }
            showsVerticalScrollIndicator={false}
          />
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
    top: 20,
    width: "90%",
    alignItems:"center"
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
  flatListImage: {
    width: 150,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 10,
  },
});

export default RentedVehiclesScreen;
