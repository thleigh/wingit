import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';


const HousingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={[styles.rowOne, {top: 150}]}>
            <TouchableOpacity style={[styles.topBox, styles.gridBox]}
                onPress={()=> navigation.goBack()}
                >
                <View style={styles.boxOne}>
                    <Icon name="home-outline" size={40} color="white"/>
                    <Text style={styles.boxText}>Housing</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={[styles.rowOne, {top: 320}]}>
            <TouchableOpacity style={[styles.subBox, styles.gridBox]}
                onPress={()=> {}}
            >
                <View style={styles.boxOne}>
                    <Text style={styles.subBoxText}>Storage</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.subBox, styles.gridBox]}
                onPress={()=> {}}
            >
                <View style={styles.boxOne}>
                    <Text style={styles.subBoxText}>Housemates</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.subBox, styles.gridBox]}
                onPress={()=> {}}
            >
                <View style={styles.boxOne}>
                    <Text style={styles.subBoxText}>Recommendations</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  topBox: {
    backgroundColor: "violet", 
  },
  rowOne: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
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
    borderWidth: 2,
    borderColor: "violet",
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

export default HousingScreen;