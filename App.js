import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import {
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider, Button } from "react-native-elements";

import ImageOverviewScreen from "./app/screens/ImageOverviewScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";

import Theme from "./app/config/Theme";

const Stack = createStackNavigator();

export default function App() {
  console.log(Stack.Navigator.displayName);
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView style={styles.mainContainer}>
        <NavigationContainer theme={Theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Gallery"
              component={ImageOverviewScreen}
              options={{
                headerStyle: {
                  backgroundColor: Theme.colors.primary,
                  elevation: 0,
                },
                headerTintColor: Theme.colors.secondary,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen name="ImageView" component={ImageOverviewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Theme.colors.primary,
  },
});
