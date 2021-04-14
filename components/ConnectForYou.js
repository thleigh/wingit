import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Pressable, Alert } from "react-native";
import connectForYouData from "../connectForYouData.js";  
import Icon from 'react-native-vector-icons/Ionicons';

const ConnectForYouScreen = ({navigation}) => {
  const list = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return connectForYouData.map((element) => {
      return (
        <View key={element.key} style={[styles.container, {margin: 20}]}>
          <Image 
            source={element.pp}
            style={{width : 60, height : 60, marginLeft: 20}}
          />          
          <Text style={{marginLeft: 10}}>{element.body}</Text>

          <TouchableOpacity           
            style={styles.recommend}
            onPress={() => setModalVisible(true)}
          >
            <View style={{justifyContent: "center", alignItems:"center"}}>
              <Text style={{top: 5}}>
                Recommend
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.recommendModal}>
            <Modal
              // animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
                <Text>
                  Hey
                </Text>
              </View>
            </Modal>
          </View>

          <TouchableOpacity 
            style={{marginLeft: 10}}
            onPress={()=> {}}
          >
            <Icon name="chatbox-outline" size={30} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{marginLeft: 5}}
            onPress={()=> {}}
          >
            <Icon name="bookmark-outline" size={28} color="black"/>
          </TouchableOpacity>

        </View>
      );
    });
  };
  return <ScrollView>{list()}</ScrollView>;
};

export default ConnectForYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center", 
    top: 10,
  },
  recommend: {
    backgroundColor: "lightgreen",
    borderRadius: 8,
    width: 100,
    height: 30,
    marginLeft: 75,
  },
  recommendModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});