import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import ConnectRecommend from "../components/ConnectRecommend";
import ConnectExplore from "../components/ConnectExplore";

const Tab = createMaterialTopTabNavigator();

const ConnectScreen = ({navigation}) => {
    return (
      <View style={styles.screen}>
        {/* <View style={styles.containerTop}>
              <Image 
                source={require("../assets/amy.png")}
                style={{width : 100, height : 100, marginLeft: 9}}
              />
                <View style={{marginLeft:25}}>
                  <Text style={styles.welcomeText}>Hi, I'm <Text style={{fontWeight:"bold"}}>Amy.</Text></Text>
                  <Text>I need to find a new housemate @ Berkeley</Text>
                </View>
        </View> */}

        <View style={styles.buttonTop}>      
          <Tab.Navigator
            scrollEnabled="true"
            initialRouteName="Recommend"
            shifting={true}
            tabBarOptions={{
              renderIndicator: () => null,
              activeTintColor: "#000",
              style: {
                backgroundColor: "transparent",
                indicatorStyle: {
                  opacity: 0
                },
                // borderRightWidth: 1,
              }
            }}
          >
            <Tab.Screen
              name="Recommend"
              component={ConnectRecommend}
            />
            <Tab.Screen
              name="Explore"
              component={ConnectExplore}
              style={{borderLeftWidth: 1}}
              />
          </Tab.Navigator>
        </View>
      </View>
    );
};

export default ConnectScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTop: {
    flexDirection:"row",
    width: 300,
    height: 200,
    alignItems: "center", 
    justifyContent: "center",
    position: "absolute",
    marginTop: 0,
    top: 0,
  },
  welcomeText: {
    fontSize: 25
  },  
  buttonTop: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
  },
});