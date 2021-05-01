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

          <View style={styles.recommendContainer}>
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

          <View style={styles.recommendModal}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.recommendModal}>
                <View style={[styles.modalView, {width: 350, height: 300}]}>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{position: "absolute", left: 15, top: 15}}
                  >
                    <Icon name="close-outline" size={40} color="black"/>
                  </Pressable>
                  <View style={{alignItems:"center", justifyContent:"center", flex: 1}}>
                    <Image 
                      source={element.pp}
                      style={{width : 60, height : 60}}
                    />   
                    <Text style={{margin: 15}}>
                      {element.body}
                    </Text>     
                    <TouchableOpacity           
                      style={{ 
                        backgroundColor: "lightgreen",
                        borderRadius: 8,
                        width: 100,
                        height: 30, 
                      }}
                      onPress={() => {}}
                    >
                      <View style={{justifyContent: "center", alignItems:"center"}}>
                        <Text style={{top: 5}}>
                          Recommend
                        </Text>
                      </View>
                    </TouchableOpacity>  
                  </View>
                </View>
              </View>
            </Modal>
          </View>
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
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  recommendContainer: {
    position: "absolute",
    flexDirection: "row",
    right: -5,
  },
});