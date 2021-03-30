import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar
} from "react-native";

import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('../assets/wingitsmall.png')}
                style={styles.logo}
                resizeMode="stretch"
                style={styles.wingitlogo}
            />
        </View>
        <View style={styles.footer}>
            <Text style={styles.title}>Meet through mutuals!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity >
                <Button
                    title="Get Started "
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                    onPress={()=>navigation.navigate('SignInScreen')}
                />
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    wingitlogo: {
        marginTop: 150,
    },
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -150
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30,
        marginBottom: 150,
        textAlign: 'center',
        alignItems: 'center',
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});
  