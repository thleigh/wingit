import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { block } from 'react-native-reanimated';

const ConnectScreen = ({navigation}) => {
    return (
      <View style={styles.screen}>
        <View style={styles.containerTop}>
          <Image 
            source={require('../assets/tanner2.png')}
            style={{width : 100, height : 100}}
          />
          <View style={{marginLeft:30}}>
            <Text style={styles.welcomeText}>Hi, I'm <Text style={{fontWeight:"bold"}}>Tanner.</Text></Text>
            <Text>I need to find a new housemate @ Berkeley</Text>
          </View>
        </View>
      </View>
    );
};

export default ConnectScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTop: {
    flexDirection:'row',
    width: 300,
    height: 200,
    alignItems: 'stretch', 
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 50,
    top: 0,
  },
  welcomeText: {
    fontSize: 25
  },  
});