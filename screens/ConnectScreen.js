import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Icon from 'react-native-vector-icons/Ionicons';

import ConnectForYou from "../components/ConnectForYou";
import ConnectOthers from "../components/ConnectOthers";

const Tab = createMaterialTopTabNavigator();

const ConnectScreen = ({navigation}) => {
    return (
      <View style={styles.screen}>
        <View style={styles.containerTop}>
              <Image 
                source={require("../assets/tanner2.png")}
                style={{width : 100, height : 100}}
              />
                <View style={{marginLeft:30}}>
                  <Text style={styles.welcomeText}>Hi, I'm <Text style={{fontWeight:"bold"}}>Tanner.</Text></Text>
                  <Text>I need to find a new housemate @ Berkeley</Text>
                </View>
        </View>
        <View style={styles.buttonTop}>      

        <Tab.Navigator
        initialRouteName="ForYou"
        tabBarOptions={{
        activeTintColor: '#e91e63',
        }}
        >
          <Tab.Screen
            name="For You"
            component={ConnectForYou}
          />
          <Tab.Screen
            name="Others"
            component={ConnectOthers}
          />
        </Tab.Navigator>
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