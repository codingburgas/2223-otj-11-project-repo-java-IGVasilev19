import React from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import Navigation from "./app/navigation/navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
