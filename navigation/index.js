import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../src/pages/MainPage";
import ProductPage from "../src/pages/ProductPage/ProductPage";
import ShopkeeperProductPage from "../src/pages/ShopkeeperProductPage/ShopkeeperProductPage";
import ThankyouPage from "../src/pages/ThankyouPage/ThankyouPage";
import DeliveryPage from "../src/pages/DeliveryPage/DeliveryPage";
import FaceDetection from "../src/pages/FaceDetection/FaceDetection";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="MainPage"
        options={{
          headerShown: false,
        }}
        component={MainPage}
      />
      <Stack.Screen
        name="ProductPage"
        options={{
          headerShown: false,
        }}
        component={ProductPage}
      />
      <Stack.Screen
        name="ThankyouPage"
        options={{
          headerShown: false,
        }}
        component={ThankyouPage}
      />
      <Stack.Screen
        name="ShopkeeperProductPage"
        options={{
          headerShown: false,
        }}
        component={ShopkeeperProductPage}
      />
      <Stack.Screen
        name="DeliveryPage"
        options={{
          headerShown: false,
        }}
        component={DeliveryPage}
      />
      <Stack.Screen
        name="FaceDetection"
        options={{
          headerShown: false,
        }}
        component={FaceDetection}
      />
    </Stack.Navigator>
  );
}