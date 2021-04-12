import * as React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ConnectOthersScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Connect Others Screen</Text>
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