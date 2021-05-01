import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import {  DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
    Title,
    Caption,
    Drawer,
} from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from "../components/context.js";

export function DrawerContent(props) {

    const { signOut } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Image 
                                source={require('../assets/tanner2.png')}
                                style={{width : 65, height : 65}}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Tanner Leigh</Title>
                                <Caption style={styles.caption}>@tnrleigh</Caption>
                            </View>
                        </View>
                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                        </View> */}
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="umbrella-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Activities"
                            onPress={() => {props.navigation.navigate('Activities')}}
                        /> */}
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="people-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Connect"
                            onPress={() => {props.navigation.navigate('Connect')}}
                        /> */}
                        <DrawerItem
                            style={{marginLeft: 20}}
                            labelStyle={{color: "black", marginLeft: -10}}
                            icon={({color, size}) => (
                                <Icon 
                                    name="car-outline" 
                                    color="black"
                                    size={size}
                                />
                            )}
                            label="Reserve a driveway"
                            onPress={() => {props.navigation.navigate("Notifications")}}
                        />
                        <DrawerItem
                            style={{marginLeft: 20}}
                            labelStyle={{color: "black", marginLeft: -10}}
                            icon={({color, size}) => (
                                <Icon 
                                    name="notifications-outline" 
                                    color="black"
                                    size={size}
                                />
                            )}
                            label="Notifications"
                            onPress={() => {props.navigation.navigate("Notifications")}}
                        />
                        <DrawerItem
                            style={{marginLeft: 20}}
                            labelStyle={{color: "black", marginLeft: -10}}
                            icon={({color, size}) => (
                                <Icon 
                                    name="gift-outline" 
                                    color="black"
                                    size={size}
                                />
                            )}
                            label="Get $5 free"
                            onPress={() => {props.navigation.navigate("Notifications")}}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="person-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        /> */}
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        /> */}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  }
);