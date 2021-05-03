import React, { useState } from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView, Modal, Pressable } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const [kapitalVisible, setkapitalVisible] = useState(false);
  const [pizzaVisible, setpizzaVisible] = useState(false);
  const [coffeeVisible, setcoffeeVisible] = useState(false);

  const [accomplshmentExpand, setAccomplishmentExpand] = useState(false);

  const handleExpand = () => {
    setAccomplishmentExpand = + 50
  }

    return (
      <View style={styles.screen}>
        <ScrollView>
        <View style={styles.containerTop}>
          <Image 
            source={require("../assets/amy.png")}
            style={{width : 100, height : 100, marginLeft: 112}}
          />
          <View style={{marginLeft:30, marginRight: 76}}>
            <Text style={styles.welcomeText}>Hi, I'm <Text style={{fontWeight:"bold"}}>Amy.</Text></Text>
            <Text>I want to go hiking.</Text>
            <View style={{flexDirection: "row", marginLeft: -5}}>
              <Icon name="location-outline" size={20} color="#979797"/> 
              <Text style={{color: "#979797", marginTop: 3}}> Los Angeles, CA</Text>
            </View>
          </View>
        </View>

        <View style={styles.helpContainer}>
          <Text style={styles.header2Text}>Favorites</Text>
          {/* <Text style={styles.bodyText}>Finding a new roomate and finding good coffee shops in LA!</Text> */}
          <View style={styles.helpPhotos}> 
            <ScrollView horizontal={true}>
              <Pressable onPress={() => setkapitalVisible(true)}>
                <View style={styles.photoBox} >
                  <Image style={styles.photoBoxPhoto} source={require("../assets/kapital.png")}/>
                  <View style={{alignSelf: "flex-start"}}>
                    <Text style={{textAlign: "left", marginTop: 10, color: "#979797"}}>Los Angeles, CA</Text>
                    <Text style={styles.bodyText}>A new sweater vest I got!</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => setpizzaVisible(true)}>
                <View style={styles.photoBox} >
                  <Image style={styles.photoBoxPhoto} source={require("../assets/pizza.png")}/>
                  <View style={{alignSelf: "flex-start"}}>
                    <Text style={{textAlign: "left", marginTop: 10, color: "#979797"}}>Los Angeles, CA</Text>
                    <Text style={styles.bodyText}>My favorite pizza</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => setcoffeeVisible(true)}>
                <View style={styles.photoBox} >
                  <Image style={styles.photoBoxPhoto} source={require("../assets/coffee.png")}/>
                  <View  style={{alignSelf: "flex-start"}}>
                    <Text style={{textAlign: "left", marginTop: 10, color: "#979797"}}>Los Angeles, CA</Text>
                    <Text style={styles.bodyText}>My favorite coffee shop</Text>
                  </View>
                </View>
              </Pressable>

                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={kapitalVisible}
                  onRequestClose={() => {
                    setkapitalVisible(!modalVisible);
                  }}
                  >
                  <Pressable onPress={() => setkapitalVisible(!kapitalVisible)} style={styles.modalContainer}>
                      <Pressable onPress={() => {}}>
                      <View style={styles.modalView}>
                        <Image style={styles.imageModal} source={require("../assets/kapital.png")}/>
                      </View>  
                      </Pressable>
                  </Pressable>
                </Modal>

                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={pizzaVisible}
                  onRequestClose={() => {
                    setpizzaVisible(!pizzaVisible);
                  }}
                  >
                  <Pressable onPress={() => setpizzaVisible(!pizzaVisible)} style={styles.modalContainer}>
                      <Pressable onPress={() => {}}>
                      <View style={styles.modalView}>
                        <Image style={styles.imageModal} source={require("../assets/pizza.png")}/>
                      </View>  
                      </Pressable>
                  </Pressable>
                </Modal>

                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={coffeeVisible}
                  onRequestClose={() => {
                    setcoffeeVisible(!coffeeVisible);
                  }}
                  >
                  <Pressable onPress={() => setcoffeeVisible(!coffeeVisible)} style={styles.modalContainer}>
                      <Pressable onPress={() => {}}>
                      <View style={styles.modalView}>
                        <Image style={styles.imageModal} source={require("../assets/coffee.png")}/>
                      </View>  
                      </Pressable>
                  </Pressable>
                </Modal>

            </ScrollView>
          </View>

        </View>

        <View style={styles.accomplishmentsContainer}>
          <Text style={[styles.header2Text, {marginLeft: 15}]}>Connections Album</Text>
        </View>
        </ScrollView>
      </View>
    );
};
export default ProfileScreen;

const width = Dimensions.get("window").width - 10; //full width
const height = Dimensions.get("window").height - 100; //full height


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  },
  screen: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTop: {
    flexDirection:"row",
    width: 300,
    height: 200,
    alignItems: "center", 
    justifyContent: "center",
    position: "absolute",
    marginTop: 0,
    top: 0,
  },
  welcomeText: {
    fontSize: 25,
  },  
  helpContainer: {
    flex: 1,
    margin: 20,
    justifyContent: "flex-start",
    top: 150
  },
  helpPhotos: {
    flexDirection: "row",
  },
  photoBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginRight: 15,
  },
  photoBoxPhoto: {
    borderRadius: 8,
    width: 200,
    height: 150,
  },
  header2Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "grey",
    
  },
  bodyText: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
    textAlign: "left"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  },
  accomplishmentsContainer: {
    flex: 1,
    marginTop: 170,
    width: width,
  },  
  accomplishmentsBox1: {
    position: "absolute",
    height: 270,
    width: width,
    top: 40,
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#BEFF9E",
    zIndex: 1,
  },
  accomplishmentsBox2: {
    position: "absolute",
    height: 270,
    width: width,
    top: 40,
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#58BDFF",
    zIndex: 2,
  },
  accomplishmentsBox3: {
    position: "absolute",
    height: 270,
    width: width,
    top: 40,
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#FF5242",
    zIndex: 3,
  },
  accomplishmentsBox4: {
    position: "absolute",
    height: 270,
    width: width,
    top: 40,
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#FFFF47",
    zIndex: 4,
  },
  modalView: {
    marginTop: -20,
    height: height - 300,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  imageModal: {
    flex: 1,
    resizeMode: "contain",
  },
});