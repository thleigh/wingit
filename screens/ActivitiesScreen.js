import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"

import ActivitiesFlex from "../components/ActivitiesFlex";

import ActivityScreen from "./activityScreens/ActivityScreen";
import HousingScreen from "./activityScreens/HousingScreen";

const ActivityStack = createStackNavigator();

const ActivitesScreen = ({navigation}) => {
  return (
    <ActivityStack.Navigator headerMode="none">
      <ActivityStack.Screen name="ActivitesFlex" component={ActivitiesFlex}/>
      <ActivityStack.Screen name="ActivityScreen" component={ActivityScreen}/>
      <ActivityStack.Screen name="HousingScreen" component={HousingScreen}/>
    </ActivityStack.Navigator>
  )
};

export default ActivitesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});