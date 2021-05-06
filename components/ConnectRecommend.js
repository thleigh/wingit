import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import ActivityRecommendScreen from "../screens/recommendScreens/ActivityRecommendScreen";
import HousingRecommendScreen from "../screens/recommendScreens/HousingRecommendScreen";
import JobsRecommendScreen from "../screens/recommendScreens/JobsRecommendScreen";
import FoodRecommendScreen from "../screens/recommendScreens/FoodRecommendScreen";

import RecommendCarousel from "./RecommendCarousel";

const TabRecommend = createMaterialTopTabNavigator();

const ConnectRecommend = ({navigation}) => {
    return (
      <View style={styles.container}>
        <RecommendCarousel style={{marginTop: -100}}/>
        <View style={styles.buttonTop}>
          <TabRecommend.Navigator
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
            <TabRecommend.Screen
              name="Activity"
              component={ActivityRecommendScreen}
            />
            <TabRecommend.Screen
              name="Housing"
              component={HousingRecommendScreen}
            />
            <TabRecommend.Screen
              name="Jobs"
              component={JobsRecommendScreen}
            />
            <TabRecommend.Screen
              name="Food"
              component={FoodRecommendScreen}
            />
          </TabRecommend.Navigator>
        </View>
      </View>
    );
};
export default ConnectRecommend;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonTop: {
    flexDirection: "row",
    // position: "absolute",
    top: -5,
  },
});