import * as React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ConnectForYouScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Connect For You Screen</Text>
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