import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { customFontsToLoad } from "./src/constants/typography";
import Root from "./src/navigators/Root";
import SplashScreen from "./src/screens/SplashScreen";
import store from "./src/store/configuretore";

export default function App() {
  const [fontsLoaded] = Font.useFonts(customFontsToLoad);

  if (!fontsLoaded) return <SplashScreen />;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Root isLoggedIn={false} />
        </NavigationContainer>
        <StatusBar barStyle="dark-content" />
      </SafeAreaProvider>
    </Provider>
  );
}
