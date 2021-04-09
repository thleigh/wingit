import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        <View style={styles.buttonTop}>      
          <TouchableOpacity>
            <View>
              <Text style={{fontSize: 20}}>For You</Text>
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>    |    </Text>
          <TouchableOpacity>
            <View>
              <Text style={{fontSize: 20}}>Others</Text>
            </View>
          </TouchableOpacity>
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
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 0,
    top: 0,
  },
  welcomeText: {
    fontSize: 25
  },  
  buttonTop: {
    flexDirection: 'row',
    position: 'absolute',
    top: 170,
  },
});