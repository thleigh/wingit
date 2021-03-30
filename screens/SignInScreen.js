import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    Button,
    StyleSheet,
    StatusBar,
    TouchableOpacityBase,
    Alert,
    Image
} from "react-native";

import * as Animatable from 'react-native-animatable';
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from "../components/context.js"
import Users from '../model/users';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    })

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
        <View style={styles.container}>
                <StatusBar backgroundColor="#009387" barStyle="light-content"/>
            <View style={styles.header}>
                <Image
                    source={require('../assets/wingitsmall.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                    style={styles.wingitlogo}
                />
            </View>
            <View style={styles.footer}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.button}>
                        <View >
                            <Button 
                                title="Login"
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View>
                            <Button 
                                title="Sign Up"
                                onPress={() => navigation.navigate('SignUpScreen')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>
                { data.isValidUser ? null : 
                <View>
                    <Text style={styles.errorMsg}>
                        Username must be 4 characters long.
                    </Text>
                </View>
                }
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            colorr="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            colorr="grey"
                            size={20}
                        />
                        }      
                    </TouchableOpacity>
                </View>

                { data.isValidPassword ? null : 
                <View>
                    <Text style={styles.errorMsg}>
                        Password must be 8 characters long.
                    </Text>
                </View>
                }
                <TouchableOpacity>
                    <Text style={{color: "#C0C0C0", marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                
                <View style={styles.loginButton}>
                        <TouchableOpacity
                                onPress={() => {loginHandle( data.username, data.password )}}
                                // onPress={() => navigation.navigate("HomeScreen")}
                                style={[styles.login, {
                                borderColor: "#C0C0C0",
                                marginTop:15,
                                borderWidth: 1
                            }]}
                        >
                            <Text style={[styles.textSign, {color:"#C0C0C0"}]}>Login</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        marginTop: 50,
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 5
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    wingitlogo: {
        marginTop: 150,
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    loginButton: {
        marginTop: 20,
    }
});
