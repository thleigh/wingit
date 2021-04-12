import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ConnectOthersScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Connect Others Screen</Text>
        <View>
          <Image 
            source={require("../assets/tanner2.png")}
            style={{width : 100, height : 100}}
          />
        </View>
      </View>
    );
};
export default ConnectOthersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  
});