import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const { width: windowWidth, heigth: windowHeight} = Dimensions.get("window");

const TabConnect = createMaterialTopTabNavigator();

const ConnectScreen = ({navigation}) => {
    return (
      <View style={styles.screen}>

      </View>
    );
};

export default ConnectScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});