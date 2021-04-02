import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActivitiesFlex = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor: 'violet'}}>
        <Button 
          style={styles.boxOne} 
          title="One"
          color="white"
          onPress={()=> Alert.alert("Button Pressed")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'coral'}}>
        <Button
          style={styles.boxTwo} 
          title="Two"
          color="white"
          onPress={()=> Alert.alert("Button Pressed")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'gold'}}>
        <Button 
          style={styles.boxThree} 
          title="Three"
          color="white"
          onPress={()=> Alert.alert("Button Pressed")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'skyblue'}}>
        <Button 
          style={styles.boxFour} 
          title="Four"
          color="white"
          onPress={()=> Alert.alert("Button Pressed")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  boxOne: {
    flex: 1,
    padding: 20,
  },
  boxTwo: {
    flex: 1,
    padding: 20,
  },
  boxThree: {
    flex: 1,
    padding: 20,
  },
  boxFour: {
    flex: 1,
    padding: 20,
  },
});

export default ActivitiesFlex;