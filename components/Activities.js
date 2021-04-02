import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import Icon from 'react-native-vector-icons/Ionicons';

const ActivitiesFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <TouchableOpacity 
          style={{backgroundColor: "violet", width: 150, height: 150}}
          onPress={()=> {}}
        >
          <View style={styles.boxOne}>
            <Icon name="people-outline" size={26} />
            <Text>Hiking</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "lightgreen", width: 150, height: 150}}>
          <Button
            style={styles.boxTwo} 
            title="Swimming"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
            />
        </TouchableOpacity>
      </View>

      <View style={styles.rowTwo}>
        <TouchableOpacity style={{backgroundColor: "skyblue", width: 150, height: 150}}>
          <Button 
            style={styles.boxThree} 
            title="Dining"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "gold", width: 150, height: 150}}>
          <Button 
            style={styles.boxFour} 
            title="Art"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rowThree}>
        <TouchableOpacity style={{backgroundColor: "coral", width: 150, height: 150}}>
          <Button 
            style={styles.boxThree} 
            title="Shopping"
            color="white"
            onPress={()=> Alert.alert("Button Pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "red", width: 150, height: 150}}>
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
    // justifyContent:"space-around",
    // alignItems: "center",
  },
  rowTwo: {
    flexDirection: "row",
    // justifyContent:"space-around",
    // alignItems: "center",
  },
  rowThree: {
    flexDirection: "row",
    // justifyContent:"space-around",
    // alignItems: "center",
  },
  boxOne: {
    // flex: 1,
    justifyContent:"center",
    alignItems:"center",
    textAlignVertical: "center",
    padding: 20,
    color: "white",
  },
  boxTwo: {
    // flex: 1,
    padding: 20,
  },
  boxThree: {
    // flex: 1,
    padding: 20,
  },
  boxFour: {
    // flex: 1,
    padding: 20,
  },
});

export default ActivitiesFlex;