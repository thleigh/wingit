import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ActivitesScreen = ({navigation}) => {
  const { colors } = useTheme();
  const theme = useTheme();
    return (
      <View>
        <View style={styles.container}>
          <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
          <Text style={{color: colors.text}}>Activities Screen</Text>
        </View>
      </View>
    );
};
export default ActivitesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  flexBox: {
    flex: 1,
    padding: 20,
  },
});