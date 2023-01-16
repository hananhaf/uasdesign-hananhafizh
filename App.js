const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import CardBoard1 from "./screens/CardBoard1";
import HomeDashboard from "./screens/HomeDashboard";
import CardBoard3 from "./screens/CardBoard3";
import CardBoard2 from "./screens/CardBoard2";
import OrderHistory from "./screens/OrderHistory";
import Wishlist from "./screens/Wishlist";
import Browse from "./screens/Browse";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Splash from "./screens/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    "SF Pro Text": require("./assets/fonts/SF_Pro_Text.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="CardBoard1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="CardBoard1"
              component={CardBoard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeDashboard"
              component={HomeDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CardBoard3"
              component={CardBoard3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CardBoard2"
              component={CardBoard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderHistory"
              component={OrderHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wishlist"
              component={Wishlist}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Browse"
              component={Browse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <CardBoard1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
