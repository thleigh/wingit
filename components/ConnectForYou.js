import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import datas from "../data.js";  

const ConnectForYouScreen = ({navigation}) => {
  const array = [
    {
      key: '1',
      title: 'example title 1',
      subtitle: 'example subtitle 1',
    },
    {
      key: '2',
      title: 'example title 2',
      subtitle: 'example subtitle 2',
    },
    {
      key: '3',
      title: 'example title 3',
      subtitle: 'example subtitle 3',
    },
  ];
  const list = () => {
    return Array.map((element) => {
      return (
        <View key={element.key} style={styles.container}>
          <Text>{element.title}</Text>
          <Text>{element.subtitle}</Text>
        </View>
      );
    });
  };
  return <View>{list()}</View>
}
export default ConnectForYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  
});