import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, CustomText, Icon, Input } from "../../components";
import { COLORS } from "../../constants";
import CustomModal from "../../components/UI/CustomModal";
import Gap from "../../components/UI/Gap";
import { AddressModal } from "../../components";
import { useUserContext } from "../../hooks/useFormContext";
import {
  db,
  off,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onValue,
  push,
  ref,
  set,
} from "../../util/firebase";
import { AuthContext } from "../../store/auth-context";

const AddressesScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setIsEditing] = useState();

  const { userId } = useContext(AuthContext);
  const {userAddresses, setUserAddresses} = useUserContext();

  const onSetAddresses = (addresses) => {
    setAddresses(addresses);
  };

  // const {
  //   user: { addresses },
  //   onSetAddress, onDeleteAddress
  // } = useUserContext();

  // const setModal = () => {
  //   refU.current.setModal();
  // };

  const renderAddresses = ({ item, i }) => {
    return (
      <Pressable onPress={() => setIsEditing(item.key)}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.grey[100],
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 0.9 }}>
          <CustomText bold style={{ fontSize: 15 }}>
            {item.val.address}
          </CustomText>
          <CustomText
            style={{
              fontSize: 13,
              color: COLORS.grey[400],
              marginTop: 10,
            }}
          >
            {`${item.val.firstName} ${item.val.lastName}`}
          </CustomText>
        </View>
        <Icon icon={"ellipsis-horizontal"} size={20} />
      </Pressable>
    );
  };

  const onAddAddress = async (address) => {
    const addressRef = push(ref(db, "addresses"));
    try {
      await set(ref(db, `users/${userId}/addresses/${addressRef.key}`), true);
      await set(addressRef, { ...address, uid: userId });
      setModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      {/* <ScrollView> */}
      <View style={{ padding: 20, flex: 1 }}>
        <View>
          <FlatList
            data={userAddresses}
            renderItem={renderAddresses}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i) => i.key}
            ListEmptyComponent={
              <>
                <CustomText>You have no addresses yet</CustomText>
              </>
            }
            ListHeaderComponent={
              <View style={{ marginBottom: 50 }}>
                <CustomText bold style={{ fontSize: 25 }}>
                  My Address Book
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 14,
                    marginTop: 10,
                    color: COLORS.grey[500],
                  }}
                >
                  Manage your frequently used addresses here
                </CustomText>

                <AddressModal
                  modalVisible={modalVisible}
                  editing = {editing}
                  setModalVisible={setModalVisible}
                  addAddress={onAddAddress}
                />

                <View style={{ marginTop: 30 }}>
                  <Button
                    onPress={() => {
                      setModalVisible(true);
                    }}
                    filled={true}
                  >
                    Add Address
                  </Button>
                </View>
              </View>
            }
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default AddressesScreen;
