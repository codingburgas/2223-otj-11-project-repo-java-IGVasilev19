import { TabView, SceneMap } from "react-native-tab-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Dimensions, StatusBar, Animated, Pressable, Text } from "react-native";
import { Box, Center, HStack, useColorModeValue, VStack } from "native-base";
import React, { useState } from "react";

const FirstRoute = () => (
  <Center my="4">
    <Text style={{ color: "white" }}>This is Tab 1</Text>
  </Center>
);

const SecondRoute = () => (
  <Center my="4">
    <Text style={{ color: "white" }}>This is Tab 2</Text>
  </Center>
);

const ThirdRoute = () => (
  <Center my="4">
    <Text style={{ color: "white" }}>This is Tab 3</Text>
  </Center>
);

const FourthRoute = () => (
  <Center my="4">
    <Text style={{ color: "white" }}>This is Tab 4</Text>
  </Center>
);

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

function Tabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: <FontAwesome5 name="car-side" size={26} color="#363636" />,
    },
    {
      key: "second",
      title: <FontAwesome5 name="motorcycle" size={26} color="#363636" />,
    },
    {
      key: "third",
      title: (
        <MaterialCommunityIcons name="sail-boat" size={26} color="#363636" />
      ),
    },
    {
      key: "fourth",
      title: <Ionicons name="airplane" size={26} color="#363636" />,
    },
  ]);

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
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
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

export default Tabs;
