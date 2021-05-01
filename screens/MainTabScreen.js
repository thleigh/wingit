import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import ActivitiesScreen from "./ActivitiesScreen";
import ConnectScreen from "./ConnectScreen";
import ProfileScreen from "./ProfileScreen";
import NotificationScreen from "./NotificationScreen";

const HomeStack = createStackNavigator();
const ConnectStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          tabStyle: { width: 40, marginTop: 12 },
          activeTintColor: '#e91e63',
        }}
    >
      <Tab.Screen
        name="Activities"
        component={HomeStackScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color }) => (
            <Icon name="umbrella-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Connect"
        component={ConnectStackScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color }) => (
            <Icon name="people-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: ' ',
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
    >
      <HomeStack.Screen name="Activities" component={ActivitiesScreen} options={{
        title: "Activities",
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }} />
    </HomeStack.Navigator>
);

const ConnectStackScreen = ({ navigation }) => (
    <ConnectStack.Navigator screenOptions={{
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
      <ConnectStack.Screen name="Connect" component={ConnectScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </ConnectStack.Navigator>
);

const NotificationStackScreen = ({ navigation }) => (
    <NotificationStack.Navigator screenOptions={{
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
      <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </NotificationStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
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
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </ProfileStack.Navigator>
);


