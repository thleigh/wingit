import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

const HousingRecommendScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Housing
          </Text>
        </ScrollView>
      </View>
    );
};
export default HousingRecommendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "white",
  },
  
});