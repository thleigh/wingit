import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ConnectRecommend from "../components/ConnectRecommend";
import ConnectExplore from "../components/ConnectExplore";

const TabConnect = createMaterialTopTabNavigator();

const ConnectScreen = ({navigation}) => {
    return (
      <View style={styles.screen}>
        <View style={styles.buttonTop}>      
          <TabConnect.Navigator
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
            <TabConnect.Screen
              name="Recommend"
              component={ConnectRecommend}
              // style={{borderLeftWidth: 1}}
            />
            <TabConnect.Screen
              name="Explore"
              component={ConnectExplore}
              // style={{borderLeftWidth: 1}}
              />
          </TabConnect.Navigator>
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