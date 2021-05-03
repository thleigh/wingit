import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Button,
    StyleSheet,
    StatusBar,
    Image
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: "",
        password: "",
        confirm_password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
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
                                color= "#a6a6a6"
                                title="Login"
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View>
                            <Button 
                                color= "#000"
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
                    />
                </View>

                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Username"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
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

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Re-type Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
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

                <View style={{marginTop: 20}}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            backgroundColor: "#D1F8FF",
                            marginTop:15,
                        }]}
                    >
                        <Text style={[styles.textSign, {color:"#000"}]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUpScreen;

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
        marginTop: 5,
        color: "#000"
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    wingitlogo: {
        marginTop: 150,
    },
});
