import React, { PureComponent } from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

const ActivityExploreScreen = ({navigation}) => {
    return (
      <View style={styles.container}>

      </View>
    );
};
export default ActivityExploreScreen;

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