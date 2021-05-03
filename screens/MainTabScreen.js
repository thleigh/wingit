import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import ActivitiesScreen from "./ActivityStackScreen";
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
          activeTintColor: '#000',
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
      headerTransparent: true,
      headerStyle: { 
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      cardStyle: {backgroundColor: "white"}
    }} 
    >
      <HomeStack.Screen name="Activities" component={ActivitiesScreen} options={{
        title: "Activities",
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }} />
    </HomeStack.Navigator>
);

const ConnectStackScreen = ({ navigation }) => (
    <ConnectStack.Navigator screenOptions={{
      headerTransparent: true,
      headerStyle: { 
        // backgroundColor: "transparent",
      },
      cardStyle: {backgroundColor: "white"}
    }}
    >
      <ConnectStack.Screen name=" " component={ConnectScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </ConnectStack.Navigator>
);

const NotificationStackScreen = ({ navigation }) => (
    <NotificationStack.Navigator screenOptions={{
      headerTransparent: true,
      headerStyle: { 
      },
      cardStyle: {backgroundColor: "white"}
    }}>
      <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </NotificationStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
      headerTransparent: true,
      headerStyle: { 
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      cardStyle: { backgroundColor: "white" }
    }}>
      <ProfileStack.Screen name=" " component={ProfileScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </ProfileStack.Navigator>
);


