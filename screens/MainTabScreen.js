import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import ActivitiesScreen from "./ActivitiesScreen";
import ConnectScreen from "./ConnectScreen";
import ProfileScreen from "./ProfileScreen";
import NotificationScreen from "./NotificationScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
        activeTintColor: '#e91e63',
    }}
    >
      <Tab.Screen
        name="Activities"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Activities',
          tabBarIcon: ({ color }) => (
            <Icon name="umbrella-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Connect"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Connect',
          tabBarIcon: ({ color }) => (
            <Icon name="people-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: { 
        backgroundColor: "#fff"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    }} 
    style={{borderColor: "#000", borderBottomWidth: 2}}
    >
      <HomeStack.Screen name="Activities" component={ActivitiesScreen} options={{
        title: "Activities",
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: { 
        backgroundColor: "#fff"
      },
      headerTintColor: "##000",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    }}
    style={{borderColor: "#000", borderBottomWidth: 2}}
    >
      <DetailsStack.Screen name="Connect" component={ConnectScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </DetailsStack.Navigator>
);


