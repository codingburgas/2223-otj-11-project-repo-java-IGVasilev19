import React from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import Navigation from './app/navigation/navigation';

export default function App() {
  return(
    <NativeBaseProvider>
     <Navigation/>
    </NativeBaseProvider>
  )
}