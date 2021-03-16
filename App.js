import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, ScrollView, ActivityIndicator } from "react-native";

import { DrawerContent } from "./screens/DrawerContent";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainTabScreen from "./screens/MainTabScreen";
import SettingsScreen from "./screens/SettingsScreen";

import { AuthContext } from "./components/context.js"

import RootStackScreen from "./screens/RootStackScreen";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: ()=> {
      setUserToken("fgkj");
      setIsLoading(false);
    },
    signOut: ()=> {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: ()=> {
      setUserToken("fgkj");
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if( isLoading ) {
    return(
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen />
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent { ...props} /> } initialRouteName="Home">
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;