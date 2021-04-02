import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActivitiesFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <TouchableOpacity style={{backgroundColor: "violet"}}>
          <Button 
            style={styles.boxOne} 
            title="Hiking"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
            />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "lightgreen"}}>
          <Button
            style={styles.boxTwo} 
            title="Swimming"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
            />
        </TouchableOpacity>
      </View>

      <View style={styles.rowTwo}>
        <TouchableOpacity style={{backgroundColor: "skyblue"}}>
          <Button 
            style={styles.boxThree} 
            title="Dining"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "gold"}}>
          <Button 
            style={styles.boxFour} 
            title="Art"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rowThree}>
        <TouchableOpacity style={{backgroundColor: "coral"}}>
          <Button 
            style={styles.boxThree} 
            title="Shopping"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "red"}}>
          <Button 
            style={styles.boxFour} 
            title="Golf"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  rowOne: {
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems: "center",
  },
  rowTwo: {
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems: "center",
  },
  rowThree: {
    flexDirection: "row",
    justifyContent:"space-around",
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