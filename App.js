import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";

import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { 
          backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Overview"
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;