import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import ActivityExploreScreen from "../screens/exploreScreens/ActivityExploreScreen";
import HousingExploreScreen from "../screens/exploreScreens/HousingExploreScreen";
import JobsExploreScreen from "../screens/exploreScreens/JobsExploreScreen";
import FoodExploreScreen from "../screens/exploreScreens/FoodExploreScreen";

const TabExplore = createMaterialTopTabNavigator();

const ConnectExplore = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonTop}>
          <TabExplore.Navigator
            scrollEnabled="false"
            initialRouteName="Activity"
            shifting={true}
            tabBarOptions={{
              activeTintColor: "black",
              indicatorStyle: {backgroundColor: "#6BE27D"},
              inactiveTintColor: "black",
              labelStyle: {
                backgroundColor: "#EEE",
                width: 80,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                padding: 7
              },
              style: {
                margin: 30,
                marginTop: 0,
                borderRadius: 20,
              },
              tabStyle: {
                borderRadius: 15
              }
            }}
          >
            <TabExplore.Screen
              name="Activity"
              component={ActivityExploreScreen}
            />
            <TabExplore.Screen
              name="Housing"
              component={HousingExploreScreen}
            />
            <TabExplore.Screen
              name="Jobs"
              component={JobsExploreScreen}
            />
            <TabExplore.Screen
              name="Food"
              component={FoodExploreScreen}
            />
          </TabExplore.Navigator>
        </View>
      </View>
    );
};
export default ConnectExplore;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonTop: {
    flexDirection: "row",
    position: "absolute",
    top: -5,
  },
});