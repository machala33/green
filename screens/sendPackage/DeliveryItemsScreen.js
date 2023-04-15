import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { SelectList } from "react-native-dropdown-select-list";
import RNPickerSelect from "react-native-picker-select";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";

import { Button, CustomText, Input } from "../../components";
import { COLORS } from "../../constants";
import IconButton from "../../components/UI/IconButton";
import { useUserContext } from "../../hooks/useFormContext";

const DeliveryItemsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { deliveryDetails, onsetDeliveryDetails } = useUserContext();
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [cameraPermission, requestPermission] = useCameraPermissions();
  const [disabled, setDisabled] = useState(true);


  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    { key: "1", value: "clothing", disabled: true },
    { key: "2", value: "document" },
    { key: "3", value: "others" },
  ];

  useEffect(() => {
    if(!deliveryDetails.category || !deliveryDetails.description || !deliveryDetails.weight || !deliveryDetails.itemsNo || !deliveryDetails.image) {
      return
    }
    setDisabled(false)
  }, [deliveryDetails])

  const verifyPermissions = async () => {
    try {
      if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
  
        return permissionResponse.granted;
      }
  
      if (cameraPermission.status === PermissionStatus.DENIED) {
        Alert.alert("You need to grant camera access to use this app");
        return false;
      }
  
      return true;
    } catch (error) {
      console.log(error)
    }
  };

  const takeImageHandler = async () => {
    try {
      const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setModalVisible(false);
    onsetDeliveryDetails("image", image.uri);
    } catch (error) {
     console.log(error) 
    }
    // setImage(image.uri);
  };

  const pickImage = async () => {
    try {
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });
  
      if (!result.cancelled) {
        setModalVisible(false);
        onsetDeliveryDetails("image", result.uri);
        // setImage(result.uri);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const proceed = () => {
    navigation.navigate("Summary");
  };
  return (
    <>
      <View
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          paddingTop: 30,
          padding: 20,
        }}
      >
        <CustomText style={{ fontSize: 23, lineHeight: 30 }} bold>
          What Package are we delivering
        </CustomText>

        <View style={{ marginTop: 40 }}>
          <View style={{ marginBottom: 10 }}>
            <CustomText style={{ fontSize: 16 }}>Category</CustomText>
          </View>
          <RNPickerSelect
            // onValueChange={(value) => setSelectedCategory(value)}
            value={deliveryDetails.category}
            onValueChange={(value) => onsetDeliveryDetails("category", value)}
            placeholder={{ label: "Select Category", value: null }}
            style={customPickerStyles}
            items={[
              { label: "clothing", value: "clothing" },
              { label: "document", value: "document" },
              { label: "others", value: "others" },
            ]}
          />
          {/* <SelectList
            placeholder="Select Category"
            setSelected={(val) => setSelectedCategory(val)}
            dropdownStyles = {{}}
            search={false}
            boxStyles = {{borderRadius: 5, borderColor: COLORS.grey[300]}}
            data={data}
            save="value"
            fontFamily="sofia-pro"
            
          /> */}
          {/* <Picker style={{marginTop: 0}} selectedValue={selectedCategory} onValueChange={(itemValue, itemIndex) => {
                setSelectedCategory(itemValue)
            }} >
                <Picker.Item style={{fontSize: 12}} label='clothing' value='clothing'></Picker.Item>
                <Picker.Item label='document' value='document'></Picker.Item>
                <Picker.Item label='other' value='other'></Picker.Item>
            </Picker> */}
        </View>

        <View style={{ marginTop: 20 }}>
          {/* <View style={{ marginBottom: 0 }}>
            <CustomText>Description</CustomText>
          </View> */}
          <Input
            label="Description"
            style={styles.textInput}
            textInputConfig={{
              placeholder: "Provide a brief description of your item",
              value: deliveryDetails.description,
              onChangeText: onsetDeliveryDetails.bind(this, "description"),
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Input
              label="Weight"
              style={styles.textInput}
              container={{ width: "auto" }}
              textInputConfig={{
                placeholder: "Weight(Kg)",
                value: deliveryDetails.weight,
                onChangeText: onsetDeliveryDetails.bind(this, "weight"),
              }}
            />
          </View>

          <View>
            <Input
              label="Number of items"
              style={styles.textInput}
              container={{ width: "auto" }}
              textInputConfig={{
                placeholder: "Number of items",
                value: deliveryDetails.itemsNo,
                onChangeText: onsetDeliveryDetails.bind(this, "itemsNo"),
              }}
            />
          </View>
        </View>

        <Modal
          animationType="fade"
          //   presentationStyle="formSheet"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          style={{ height: 200, marginTop: 300, flex: 0 }}
        >
          <View
            style={{
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              flex: 1,
              //   justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
            {/* <TouchableWithoutFeedback>
              <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback> */}
            <View style={styles.modalContent}>
              <Pressable
                onPress={() => {
                  takeImageHandler();
                }}
                style={styles.bottomBorder}
              >
                <CustomText style={{ fontSize: 16, paddingVertical: 15 }}>
                  Take Photo
                </CustomText>
              </Pressable>
              <Pressable
                onPress={() => {
                  pickImage();
                }}
              >
                <CustomText style={{ fontSize: 16, paddingVertical: 15 }}>
                  Choose Photo
                </CustomText>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={{ marginTop: 20 }}>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            {deliveryDetails.image && (
              <Image
                source={{ uri: deliveryDetails.image }}
                style={{ width: 120, height: 120, borderRadius: 15 }}
              />
            )}
          </View>
          <Button
            color={COLORS.grey[600]}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            Upload Photo
          </Button>
        </View>

        <View style={{ marginTop: 50 }}>
          <IconButton
            disabled={disabled}
            color="#ffffff"
            style={styles.iconButton}
            filled
            bold
            size={24}
            icon="chevron-forward-outline"
            onPress={proceed}
          >
            Proceed
          </IconButton>
        </View>
      </View>
    </>
  );
};

export default DeliveryItemsScreen;

const styles = StyleSheet.create({
  textInput: {
    borderColor: COLORS.grey[100],
    backgroundColor: COLORS.grey[50],
    margin: 0,
    width: "100%",
  },

  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    padding: 15,
    margin: 1,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 50,
    // marginTop: "50%",
    width: "90%",
    borderRadius: 10,
    elevation: 2,
  },

  bottomBorder: {
    borderBottomColor: COLORS.grey[100],
    borderBottomWidth: 1,
  },

  iconButton: {
    borderRadius: 5,
    backgroundColor: COLORS.primary[500],
    paddingVertical: 15,
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.grey[100],
    backgroundColor: COLORS.grey[50],
    borderRadius: 4,
    color: "black",
    //   paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.grey[100],
    backgroundColor: COLORS.grey[50],
    borderRadius: 4,
    color: "black",
    //   paddingRight: 30, // to ensure the text is never behind the icon
  },
});
