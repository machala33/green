import { View, Modal, Pressable, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import Icon from "./Icon";

const CustomModal = ({ children, title, visible, setModalVisible }) => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!visible);
      }}
    >
      {/* <View style={styles.modalContent}> */}
      <View style={styles.centeredView}>
        <View style={styles.modalHeading}>
          <Text style={styles.text}>{title}</Text>
          <Pressable onPress={() => {setModalVisible(!visible)}}>
            <Icon icon="close-circle-outline" color={COLORS.white} size={24} />
          </Pressable>
        </View>
        <View style = {styles.modalContent}>
        {children}
        </View>
      </View>
      {/* </View> */}
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffff",
  },

  centeredView: {
    flex: 1,
  },

  modalHeading: {
    padding: 15,
    textAlign: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary[500],
    color: COLORS.white,
    width: "100%",
  },

  text: {
    color: COLORS.white,
    fontSize: 15,
    textAlign: "center",
  },
});
