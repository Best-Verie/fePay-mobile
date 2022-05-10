import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import * as Font from "expo-font";
import React from "react";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    "urbanist-bold": require("./assets/fonts/Urbanist/static/Urbanist-Bold.ttf"),
    "urbanist-italic": require("./assets/fonts/Urbanist/static/Urbanist-Italic.ttf"),
    "urbanist-regular": require("./assets/fonts/Urbanist/static/Urbanist-Regular.ttf"),
  });
};
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    if (fontsLoaded) {
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      );
    } else {
      return (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => {
            setFontsLoaded(true);
          }}
          onError={console.warn}
        />
      );
    }
  }
}
