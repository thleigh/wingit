import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

const HousingExploreScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Connect Others Screen</Text>
          <View>

          </View>
        </ScrollView>
      </View>
    );
};
export default HousingExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "white",
  },
  
});