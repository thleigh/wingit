import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const ActivitiesFlex = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>You can pick more than one!</Text> */}
      <View style={styles.rowOne}>
        <TouchableOpacity 
          style={[{backgroundColor: "violet"}, styles.gridBox]}
          onPress={()=> navigation.navigate("HousingScreen")}
          >
          <View style={styles.boxOne}>
            <Icon name="home-outline" size={70} color="white"/>
            <Text style={styles.boxText}>Housing</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[{backgroundColor: "#6BE27D"}, styles.gridBox]}
          onPress={()=> navigation.navigate("ActivityScreen")}
          >
          <View style={styles.boxOne}>
            <Icon name="bicycle-outline" size={70} color="white"/>
            <Text style={styles.boxText}>Activity</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rowTwo}>
        <TouchableOpacity style={[{backgroundColor: "skyblue"}, styles.gridBox]}
          onPress={()=> navigation.navigate("FoodScreen")}
          >
          <View style={styles.boxOne}>
            <Icon name="fast-food-outline" size={70} color="white"/>
            <Text style={styles.boxText}>Food</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[{backgroundColor: "gold"}, styles.gridBox]}
          onPress={()=> navigation.navigate("JobScreen")}
          >
          <View style={styles.boxOne}>
            <Icon name="briefcase-outline" size={70} color="white"/>
            <Text style={styles.boxText}>Jobs</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  headerText: {
    textAlign: "center",
    marginTop: -20,
    marginBottom: 10
  },
  boxText: {
    color: "white",
    fontSize: 25,
  },
  gridBox: {
    margin: 20,
    borderRadius: 8,
    width: 160, 
    height: 180,
    justifyContent: "center",
  },
  rowOne: {
    flexDirection: "row",
  },
  rowTwo: {
    flexDirection: "row",
  },
  rowThree: {
    flexDirection: "row",
  },
  boxOne: {
    // flex: 1,
    justifyContent:"center",
    alignItems:"center",
    textAlignVertical: "center",
    padding: 20,
    color: "#fff",
  },
});

export default ActivitiesFlex;