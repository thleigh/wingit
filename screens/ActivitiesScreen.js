import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ActivitesFlex from '../components/Activities'

const ActivitesScreen = ({navigation}) => {
  const { colors } = useTheme();
    return (
      <View>
        {/* <View style={styles.container}>
          <StatusBar />
          <Text style={{color: colors.text}}>Activities Screen</Text>
        </View> */}
          <ActivitesFlex />
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