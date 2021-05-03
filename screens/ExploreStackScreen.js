import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"

import ConnectExplore from "../components/ConnectExplore";

import ActivityExploreScreen from "./exploreScreens/ActivityExploreScreen";
import HousingExploreScreen from "./exploreScreens/HousingExploreScreen";
import FoodExploreScreen from "./exploreScreens/FoodExploreScreen";
import JobExploreScreen from "./exploreScreens/JobExploreScreen";

const ExploreStack = createStackNavigator();

const ExploreStackScreen = ({navigation}) => {
  return (
    <ExploreStack.Navigator drawerContent={props => <DrawerContent { ...props} /> } headerMode="none" screenOptions={{cardStyle: {backgroundColor: "white"}}}>
      <ExploreStack.Screen name="ConnectExplore" component={ConnectExplore}/>
      <ExploreStack.Screen name="ActivityExploreScreen" component={ActivityExploreScreen}/>
      <ExploreStack.Screen name="HousingExploreScreen" component={HousingExploreScreen}/>
      <ExploreStack.Screen name="FoodExploreScreen" component={FoodExploreScreen}/>
      <ExploreStack.Screen name="JobExploreScreen" component={JobExploreScreen}/>
    </ExploreStack.Navigator>
  )
};

export default ExploreStackScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});