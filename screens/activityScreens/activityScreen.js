import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const ActivityScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <TouchableOpacity style={[{backgroundColor: "lightgreen"}, styles.gridBox]}
          onPress={()=> navigation.goBack()}
        >
          <View style={styles.boxOne}>
            <Icon name="bicycle-outline" size={40} color="white"/>
            <Text style={styles.boxText}>Activity</Text>
          </View>
        </TouchableOpacity>

        <View style={{marginTop: 30}}>
          <TouchableOpacity style={[styles.subBox, styles.gridBox]}
            onPress={()=> {}}
          >
            <View style={styles.boxOne}>
              <Text style={styles.subBoxText}>Surfing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subBox, styles.gridBox]}
            onPress={()=> {}}
          >
            <View style={styles.boxOne}>
              <Text style={styles.subBoxText}>Snowboarding</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subBox, styles.gridBox]}
            onPress={()=> {}}
          >
            <View style={styles.boxOne}>
              <Text style={styles.subBoxText}>Weightlifting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subBox, styles.gridBox]}
            onPress={()=> {}}
          >
            <View style={styles.boxOne}>
              <Text style={styles.subBoxText}>Biking</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    textAlign: "center",
    marginTop: -20,
    marginBottom: 10
  },
  boxText: {
    color: "white",
    fontSize: 25,
    marginLeft: 25,
  },
  subBoxText: {
    color: "black",
    fontSize: 25,
  },
  subBox: {
    borderWidth: 1,
    borderColor: "lightgreen",
    marginTop: 2,
  }, 
  gridBox: {
    margin: 20,
    borderRadius: 8,
    width: 300, 
    height: 70,
    justifyContent: "center",
  },
  boxOne: {
    // flex: 1,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    textAlignVertical: "center",
    padding: 10,
    color: "#fff",
  },
});

export default ActivityScreen;