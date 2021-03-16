import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

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
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: { 
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: "Overview",
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: { 
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </DetailsStack.Navigator>
);
