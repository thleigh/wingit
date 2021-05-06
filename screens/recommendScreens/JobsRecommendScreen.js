import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

const JobRecommendScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Jobs
          </Text>
        </ScrollView>
      </View>
    );
};
export default JobRecommendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "white",
  },
  
});