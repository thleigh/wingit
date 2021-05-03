import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

const JobExploreScreen = ({navigation}) => {
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
export default JobExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "white",
  },
  
});