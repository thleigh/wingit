import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import DropDownPicker from "react-native-dropdown-picker"

const FoodScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: "Nursing", value: "Nursing"},
        {label: "Law", value: "Law"},
        {label: "Software Engineering", value: "SoftwareEngineering"},
        {label: "Medical School", value: "MedicalSchool"},
        {label: "Start Ups", value: "StartUps"},
        {label: "Entrepreneurship", value: "Entrepreneurship"},
    ]);

  return (
    <View style={styles.container}>
        <View style={[styles.rowOne, {top: 150}]}>
            <TouchableOpacity style={[styles.topBox, styles.gridBox]}
                onPress={()=> navigation.goBack()}
                >
                <View style={styles.boxOne}>
                    <Icon name="briefcase-outline" size={40} color="white"/>
                    <Text style={styles.boxText}>Jobs</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.pickerBox}>            
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setValue={setValue}
                setItems={setItems}
                setOpen={setOpen}
                placeholder="Which Field?"
                
                containerStyle={{height: 40, width: 300}}
                onChangeItem={item => setSelectedValue(item)}
            />
        </View>

        <View style={[styles.rowOne, {top: 380}]}>
            <TouchableOpacity style={[styles.subBox, styles.gridBox]}
                onPress={()=> {}}
            >
                <View style={styles.boxOne}>
                    <Text style={styles.subBoxText}>Advice</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.subBox, styles.gridBox]}
                onPress={()=> {}}
            >
                <View style={styles.boxOne}>
                    <Text style={styles.subBoxText}>Referrals</Text>
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
    backgroundColor: "gold", 
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
    borderColor: "gold",
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
  pickerBox: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 305,
    height: 40,
    width: 300,
    zIndex: 1,
  }, 
});

export default FoodScreen;