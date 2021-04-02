import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const ActivitiesFlex = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 100,
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 20,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 20,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 20,
  },
});

export default ActivitiesFlex;