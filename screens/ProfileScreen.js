import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
    return (
      <View style={styles.screen}>
        <View style={styles.containerTop}>
          <Image 
            source={require("../assets/tanner2.png")}
            style={{width : 100, height : 100}}
          />
          <View style={{marginLeft:30, marginRight: 50}}>
            <Text style={styles.welcomeText}>Hi, I'm <Text style={{fontWeight:"bold"}}>Tanner.</Text></Text>
          </View>
        </View>

        <View style={styles.helpContainer}>
          <Text style={styles.header2Text}>I need help with</Text>
          <Text style={styles.bodyText}>Finding a new roomate and finding good coffee shops in LA!</Text>
          <View><Text>Box1</Text></View>
          <View><Text>Box2</Text></View>
          <View><Text>Box3</Text></View>

        </View>

        <View style={styles.accomplishmentsContainer}>
          <Text style={styles.header2Text}>Accomplishments</Text>
        </View>

      </View>
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
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
    fontSize: 25,
  },  
  helpContainer: {
    flex: 1,
    margin: 20,
    justifyContent: "flex-start",
    top: 150
  },
  header2Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "grey",
  },
  bodyText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});