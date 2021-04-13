import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ConnectForYouScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Connect For You Screen</Text>
        <View>
          <Image 
            source={require("../assets/tanner2.png")}
            style={[{width : 100, height : 100}]}
          />
        </View>
      </View>
    );
};
export default ConnectForYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  
});