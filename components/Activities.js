import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
            <Icon name="image-outline" size={26} color="white"/>
            <Text style={{color:"white"}}>Moving</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "lightgreen", width: 150, height: 150}}
          onPress={()=> {}}
        >
          <View style={styles.boxOne}>
            <Icon name="bicycle-outline" size={26} color="white"/>
            <Text style={{color:"white"}}>Activity</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rowTwo}>
        <TouchableOpacity style={{backgroundColor: "skyblue", width: 150, height: 150}}
          onPress={()=> {}}
        >
          <View style={styles.boxOne}>
            <Icon name="fast-food-outline" size={26} color="white"/>
            <Text style={{color:"white"}}>Dining</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "gold", width: 150, height: 150}}
          onPress={()=> {}}
        >
          <View style={styles.boxOne}>
            <Icon name="color-palette-outline" size={26} color="white"/>
            <Text style={{color:"white"}}>Art</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rowThree}>
        <TouchableOpacity style={{backgroundColor: "coral", width: 150, height: 150}}
          onPress={()=> {}}
        >
          <View style={styles.boxOne}>
            <Icon name="pricetag-outline" size={26} color="white"/>
            <Text style={{color:"white"}}>Selling</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "red", width: 150, height: 150}}
          onPress={()=> {}}
        >
          <View style={styles.boxOne}>
            <Icon name="golf-outline" size={26} color="white"/>
            <Text style={{color:"white"}}>Golf</Text>
          </View>
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
    color: "#fff",
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