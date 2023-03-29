import { NativeBaseProvider } from "native-base";
import Navigation from "./app/navigation/navigation";
import CoreProvider from "./app/providers/CoreProvider"

export default function App() {
  return (
    <NativeBaseProvider>
      <CoreProvider>
        <Navigation />
      </CoreProvider>
    </NativeBaseProvider>
  );
}
