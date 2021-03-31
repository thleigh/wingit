import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ConnectScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Connect Screen</Text>
      </View>
    );
};

export default ConnectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});