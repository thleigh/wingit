import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ActivitiesFlex = () => {
  return (
    <View style={styles.container}>
      <Button 
        style={styles.boxOne} 
        title="One"
        color="violet"
        onPress={()=> Alert.alert("Button Pressed")}
      />
      <Button 
        style={styles.boxTwo} 
        title="Two"
        color="violet"
        onPress={()=> Alert.alert("Button Pressed")}
      />
      <Button 
        style={styles.boxThree} 
        title="Three"
        color="violet"
        onPress={()=> Alert.alert("Button Pressed")}
      />
      <Button 
        style={styles.boxFour} 
        title="Four"
        color="violet"
        onPress={()=> Alert.alert("Button Pressed")}
      />
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
    borderRadius: 10,
    borderWidth: 1,
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