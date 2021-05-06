import React, { PureComponent } from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

const ActivityRecommendScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Activity Recommend
          </Text>
        </ScrollView>
      </View>
    );
};
export default ActivityRecommendScreen;

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