import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ConnectScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/tanner2.png')}
          style={{width : 100, height : 100}}
        />
        <Text style={styles.welcomeText}>Hi, I'm <Text style={{fontWeight:"bold"}}>Tanner.</Text></Text>
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
  welcomeText: {
    fontSize: 25
  },  
});