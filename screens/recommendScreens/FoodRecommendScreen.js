import * as React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";

const FoodRecommendScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Food
          </Text>
        </ScrollView>
      </View>
    );
};
export default FoodRecommendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "white",
  },
  
});