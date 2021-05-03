import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import ActivityExploreScreen from "../screens/exploreScreens/ActivityExploreScreen";
import HousingExploreScreen from "../screens/exploreScreens/HousingExploreScreen";
import JobsExploreScreen from "../screens/exploreScreens/JobsExploreScreen";
import FoodExploreScreen from "../screens/exploreScreens/FoodExploreScreen";

const Tab = createMaterialTopTabNavigator();

const ConnectExplore = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonTop}>
          <Tab.Navigator
            scrollEnabled="true"
            initialRouteName="Activity"
            shifting={true}
            tabBarOptions={{
              renderIndicator: () => null,
              activeTintColor: "#000",
              style: {
                backgroundColor: "transparent",
                indicatorStyle: {
                  opacity: 0
                },
              }
            }}
          >
            <Tab.Screen
              name="Activity"
              component={ActivityExploreScreen}
            />
            <Tab.Screen
              name="Housing"
              component={HousingExploreScreen}
            />
            <Tab.Screen
              name="Jobs"
              component={JobsExploreScreen}
            />
            <Tab.Screen
              name="Food"
              component={FoodExploreScreen}
            />
          </Tab.Navigator>
        </View>
        <ScrollView>
          <View>

          </View>
        </ScrollView>
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