import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { CustomText, Input, RadioButton } from "../components";
import { COLORS } from "../constants";
import IconButton from "../components/UI/IconButton";
import { useUserContext } from "../hooks/useFormContext";

const SendPackageScreen = ({ navigation }) => {
  const { userAddresses, deliveryDetails, onsetDeliveryDetails } = useUserContext();
  // const [addresses, setAddresses] = useState(userAddresses);
  const [selected, setSelected] = useState("");
  const [disabled, setDisabled] = useState(true);

  const onSelect = (key) => {

    const details = userAddresses.find((add) => {
      return add.key === key
    })

    onsetDeliveryDetails("senderAddress", details.val.address)
    onsetDeliveryDetails("senderName", details.val.firstName + " " + details.val.lastName)
    onsetDeliveryDetails("senderLandmark", details.val.landmark)
    onsetDeliveryDetails("senderAddress", details.val.phone)
    // setDelivery((prevData) => {
    //   return {
    //     ...prevData,
    //     originAddressId: key,
    //   }
    // });

    setSelected(key);
    // setAddresses(
    //   addresses.map(address =>
    //     address.id === key ? {...address, selected: true} : {...address, selected: false}
    //   )
    // )
    const disabled = !!deliveryDetails.senderAddress;
    setDisabled(!disabled);
  };

  const proceed = () => {
    navigation.navigate("SendTo");
  };

  const renderAddresses = ({ item }) => {
    return (
      <Pressable
        key={item.key}
        style={styles.rootContainer}
        onPress={() => onSelect(item.key)}
      >
        <View>
          <CustomText style={{ fontSize: 15 }}>
            {item.val.firstName + " " + item.val.lastName}
          </CustomText>
          <CustomText style={{ color: COLORS.grey[500], marginTop: 10 }}>
            {item.val.address}
          </CustomText>
        </View>
        <View
          style={[styles.radio, selected === item.key && styles.activeRadio]}
        >
          <View style={styles.innerRadio} />
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          paddingTop: 30,
          padding: 20,
        }}
        contentContainerStyle={{}}
      >
        <CustomText style={{ fontSize: 23, lineHeight: 30 }} bold>
          Where are we picking your package from?
        </CustomText>
        <View style={{ marginTop: 40 }}>
          <View style={{ marginBottom: 10 }}>
            <CustomText
              style={{ color: COLORS.primary[500], fontSize: 16 }}
              bold
            >
              Add new address
            </CustomText>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("Addresses");
            }}
            style={styles.textContainer}
          >
            <CustomText style={{ color: COLORS.grey[400] }}>
              Tap to add address
            </CustomText>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color={COLORS.grey[500]}
            />
          </Pressable>
        </View>

        <View style={{ marginTop: 40, flex: 1 }}>
          <View>
            <CustomText style={{ color: COLORS.grey[800], fontSize: 17 }}>
              Select from saved locations
            </CustomText>
          </View>

          <View style={{ marginTop: 20, flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={userAddresses}
              renderItem={renderAddresses}
              keyExtractor={(i) => i.key}
            />
            {/* <RadioButton data={userAddresses} onSelect = {(id) => onSelect(id)} /> */}
          </View>
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

export default SendPackageScreen;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderColor: COLORS.grey[200],
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 10,
    backgroundColor: COLORS.grey[50],
    borderRadius: 3,
  },

  iconButton: {
    borderRadius: 5,
    backgroundColor: COLORS.primary[500],
    paddingVertical: 15,
  },

  rootContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  radio: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: COLORS.grey[400],
    alignItems: "center",
    justifyContent: "center",
  },

  activeRadio: {
    backgroundColor: COLORS.green,
  },

  innerRadio: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
});
