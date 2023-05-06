import { Text, StyleSheet, FlatList } from "react-native";
import { Box } from "native-base";
import React, { useEffect, useState } from "react";

const OwnerVehicleDetailScreen = () => {

  const [vehicles, setVehicles] = useState([]);

  async function getVehicles() {
    const res = await fetch("http://192.168.1.5:8080/vehicle/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return;

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
        <Text style={styles.text1}>Vehicle details</Text>
        <Box>
          <FlatList
            data={vehicles.image2}
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
  text1: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
});

export default OwnerVehicleDetailScreen;
