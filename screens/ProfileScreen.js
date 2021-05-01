import React, { useState } from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView, Modal, Pressable } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

const ProfileScreen = () => {
  const [kapitalVisible, setkapitalVisible] = useState(false);
  const [pizzaVisible, setpizzaVisible] = useState(false);
  const [coffeeVisible, setcoffeeVisible] = useState(false);
    return (
      <View style={styles.screen}>
        <View style={styles.containerTop}>
          <Image 
            source={require("../assets/tanner2.png")}
            style={{width : 100, height : 100}}
          />
          <View style={{marginLeft:30, marginRight: 50}}>
            <Text style={styles.welcomeText}>Hi, I'm <Text style={{fontWeight:"bold"}}>Tanner.</Text></Text>
          </View>
        </View>

        <View style={styles.helpContainer}>
          <Text style={styles.header2Text}>I need help with</Text>
          <Text style={styles.bodyText}>Finding a new roomate and finding good coffee shops in LA!</Text>
          <View style={styles.helpPhotos}> 
            <ScrollView horizontal={true}>
              <Pressable onPress={() => setkapitalVisible(true)}>
                <View style={styles.photoBox} >
                  <Image style={styles.photoBoxPhoto} source={require("../assets/kapital.png")}/>
                </View>
              </Pressable>
              <Pressable onPress={() => setpizzaVisible(true)}>
                <View style={styles.photoBox} >
                  <Image style={styles.photoBoxPhoto} source={require("../assets/pizza.png")}/>
                </View>
              </Pressable>
              <Pressable onPress={() => setcoffeeVisible(true)}>
                <View style={styles.photoBox} >
                  <Image style={styles.photoBoxPhoto} source={require("../assets/coffee.png")}/>
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
            <Text style={[styles.header2Text, {marginLeft: 15}]}>Accomplishments</Text>
            <View style={styles.accomplishmentsBox}>
                <Text style={{marginBottom: 10, fontSize: 20, marginLeft: 10}}>
                  Bungee Jumping
                </Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                  }}
                  />
                <Text style={{marginBottom: 10, fontSize: 20, marginLeft: 10}}>
                  Moving to LA
                </Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                  }}
                  />
                <Text style={{marginBottom: 10, fontSize: 20, marginLeft: 10}}>
                  Rock Climbing
                </Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                  }}
                  />
            </View>
        </View>

      </View>
    );
};
export default ProfileScreen;

const width = Dimensions.get("window").width - 10; //full width
const height = Dimensions.get("window").heigth - 100; //full height


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screen: {
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
    marginTop: 15,
  },
  accomplishmentsContainer: {
    flex: 1,
    marginTop: 200,
    width: width,
  },  
  accomplishmentsBox: {
    backgroundColor: "#EEEEEE",
    height: 270,
    padding: 10,
    borderRadius:20,
    borderWidth: 3,
    borderColor: "#58BDFF",
  },
  modalView: {
    height: "50%",
    width: width,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "red"
  },
  imageModal: {
    flex: 1,
    resizeMode: "contain",
  },
});