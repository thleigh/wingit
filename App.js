import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to the details screen again"
        onPress={() => navigation.push('Details')}
      /><Button
        title="Go home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;