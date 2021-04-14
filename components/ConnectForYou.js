import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import datas from "../data.js";  
import Icon from 'react-native-vector-icons/Ionicons';

const ConnectForYouScreen = ({navigation}) => {
  const list = () => {
    return datas.map((element) => {
      return (
        <View key={element.key} style={[styles.container, {margin: 10}]}>
          <Image 
            source={element.pp}
            style={{width : 50, height : 50}}
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

          <TouchableOpacity style={{marginLeft: 10}}>
            <Icon name="chatbox-outline" size={30} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 5}}>
            <Icon name="bookmark-outline" size={28} color="black"/>
          </TouchableOpacity>

        </View>
      );
    });
  };
  return <View>{list()}</View>;
};

export default ConnectForYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center", 
    marginLeft: 45,
    top: 10,
    // justifyContent: "center",
  },
  recommend: {
    backgroundColor: "lightgreen",
    borderRadius: 8,
    width: 100,
    height: 30,
    marginLeft: 95,
  }
});