import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTabScreen from "./components/MainTabScreen";
import { DrawerContent } from "./components/DrawerContent";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent { ...props} /> } initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
        {/* <Drawer.Screen name="Profile" component={DetailsStackScreen} /> */}
        {/* <Drawer.Screen name="Explore" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;