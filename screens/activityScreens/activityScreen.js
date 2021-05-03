import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const ActivitiesFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <TouchableOpacity style={[{backgroundColor: "lightgreen"}, styles.gridBox]}
          onPress={()=> {}}
        >
          <View style={styles.boxOne}>
            <Icon name="bicycle-outline" size={70} color="white"/>
            <Text style={styles.boxText}>Activity</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20
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