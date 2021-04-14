import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import datas from "../data.js";  

const ConnectForYouScreen = ({navigation}) => {
  const list = () => {
    return datas.map((element) => {
      return (
        <View key={element.key} style={{margin: 10}}>
              <Image 
                source={element.pp}
                style={{width : 50, height : 50}}
              />          
          <Text>{element.title}</Text>
          <Text>{element.body}</Text>
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
    alignItems: 'center', 
    justifyContent: 'center'
  },
  
});