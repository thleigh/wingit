import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import connectForYouData from "../connectForYouData.js";  
import Icon from 'react-native-vector-icons/Ionicons';

const ConnectForYouScreen = ({navigation}) => {
  const list = () => {
    return connectForYouData.map((element) => {
      return (
        <View key={element.key} style={[styles.container, {margin: 20}]}>
          <Image 
            source={element.pp}
            style={{width : 60, height : 60, marginLeft: 20}}
          />          
          <Text style={{marginLeft: 10}}>{element.body}</Text>

          <TouchableOpacity           
            style={styles.recommend}
            onPress={()=> {}}
          >
            <View style={{justifyContent: "center", alignItems:"center"}}>
              <Text style={{top: 5}}>
                Recommend
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{marginLeft: 10}}
            onPress={()=> {}}
          >
            <Icon name="chatbox-outline" size={30} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{marginLeft: 5}}
            onPress={()=> {}}
          >
            <Icon name="bookmark-outline" size={28} color="black"/>
          </TouchableOpacity>

        </View>
      );
    });
  };
  return <ScrollView>{list()}</ScrollView>;
};

export default ConnectForYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center", 
    top: 10,
    // justifyContent: "center",
  },
  recommend: {
    backgroundColor: "lightgreen",
    borderRadius: 8,
    width: 100,
    height: 30,
    marginLeft: 80,
  }
});