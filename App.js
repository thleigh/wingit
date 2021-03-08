import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";

import { DrawerContent } from "./components/DrawerContent";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainTabScreen from "./components/MainTabScreen";
import SettingsScreen from "./components/SettingsScreen";

import RootStackScreen from "./components/RootStackScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent { ...props} /> } initialRouteName="Home">
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;