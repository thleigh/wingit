import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import datas from "../data.js";  

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

          <TouchableOpacity>
            <View>
              <Text>
                
              </Text>
            </View>
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
    // justifyContent: "center",
  },
  
});