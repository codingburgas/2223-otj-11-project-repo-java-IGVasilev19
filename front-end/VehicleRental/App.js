import React from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './app/navigation/navigation';

export default function App() {
  return(
    <PaperProvider>
     <Navigation/>
  </PaperProvider>
  )
}