import { StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import CustomModal from "./UI/CustomModal";
import Gap from "./UI/Gap";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { COLORS } from "../constants";
import { useUserContext } from "../hooks/useFormContext";

const AddressModal = ({addAddress, modalVisible, setModalVisible, editing}) => {

  const {onAddAddress} = useUserContext();

  // const [modalVisible, setModalVisible] = useState(false);
  const [inputs, setInputs] = useState({
    address: {
      value: "",
      isValid: true,
    },

    postalCode: {
      value: "",
      isValid: true,
    },

    firstName: {
      value: "",
      isValid: true,
    },

    lastName: {
      value: "",
      isValid: true,
    },

    landmark: {
      value: "",
      isValid: true,
    },

    phone: {
      value: "",
      isValid: true,
    },
  });

  // const setModal = () => {
  //   setModalVisible(true);
  // };

  const inputChangedHandler = (identifier, enteredValue) => {
    setInputs((currInputs) => {
      return {
        ...currInputs,
        [identifier]: {value:enteredValue, isValid: true},
      };
    });
  };

  const saveAddress = async () => {
    let addressDetails = {
      address: inputs.address.value,
      postalCode: inputs.postalCode.value,
      firstName: inputs.firstName.value,
      lastName: inputs.lastName.value,
      landmark: inputs.landmark.value,
      phone: inputs.phone.value,
    }

    await addAddress(addressDetails)

    // try {
    //   const data =  addAddress(addressDetails)
    // if(data.isAdded) {
    //   console.log('firstd')
    // } else {
    //   console.log('nope')
    // }
    // } catch (error) {
    //   console.log(error)
    // }    
  }

  const submitHandler = () => {
    const addressIsValid = inputs.address.value.trim().length > 3;
    const postalCodeIsValid = inputs.postalCode.value.trim().length > 3;
    const firstNameIsValid = inputs.firstName.value.trim().length > 3;
    const lastNameIsValid = inputs.lastName.value.trim().length > 3;
    const landmarkIsValid = inputs.landmark.value.trim().length > 3;
    const phoneIsValid = inputs.phone.value.trim().length > 3;

    if(!addressIsValid || !postalCodeIsValid || !firstNameIsValid || !lastNameIsValid || !landmarkIsValid || !phoneIsValid) {
      return setInputs((currInputs) => {
        return {
          ...currInputs,
          address: {
            value: currInputs.address.value,
            isValid: addressIsValid
          },

          postalCode: {
            value: currInputs.postalCode.value,
            isValid: postalCodeIsValid
          },

          firstName: {
            value: currInputs.firstName.value,
            isValid: firstNameIsValid
          },

          lastName: {
            value: currInputs.lastName.value,
            isValid: lastNameIsValid
          },

          landmark: {
            value: currInputs.landmark.value,
            isValid: landmarkIsValid
          },

          phone: {
            value: currInputs.phone.value,
            isValid: phoneIsValid
          }
        }
      })
    }

    saveAddress()
  }

  // useImperativeHandle(ref, () => {
  //   return {
  //     setModal,
  //   };
  // });

  return (
    <CustomModal
      title="Add Address"
      visible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <View>
        <Input
          textInputConfig={{
            textContentType: "Address",
            placeholder: "Address",
            autocorrect: false,
            placeholderTextColor: COLORS.grey[400],
            onChangeText: inputChangedHandler.bind(this, "address"),
            value: inputs.address.value,
          }}
        />

        <Input
          textInputConfig={{
            textContentType: "postalCode",
            placeholder: "Postal Code",
            autocorrect: false,
            placeholderTextColor: COLORS.grey[400],
            onChangeText: inputChangedHandler.bind(this, "postalCode"),
            value: inputs.postalCode.value,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            // justifyContent: "space-between",
            columnGap: 10,
            rowGap: 10,
            alignItems: "center",
          }}
        >
          <Input
            textInputConfig={{
              textContentType: "Address",
              placeholder: "First Name",
              autocorrect: false,
              placeholderTextColor: COLORS.grey[400],
              onChangeText: inputChangedHandler.bind(this, "firstName"),
            value: inputs.firstName.value,
            }}
          />

          <Gap size={10} />

          <Input
            textInputConfig={{
              textContentType: "Address",
              placeholder: "Last Name",
              autocorrect: false,
              placeholderTextColor: COLORS.grey[400],
              onChangeText: inputChangedHandler.bind(this, "lastName"),
            value: inputs.lastName.value,
            }}
          />
        </View>

        <Input
          textInputConfig={{
            placeholder: "Landmark",
            autocorrect: false,
            placeholderTextColor: COLORS.grey[400],
            onChangeText: inputChangedHandler.bind(this, "landmark"),
            value: inputs.landmark.value,
          }}
        />

        <Input
          textInputConfig={{
            textContentType: "telephoneNumber",
            placeholder: "Phone Number",
            autocorrect: false,
            placeholderTextColor: COLORS.grey[400],
            onChangeText: inputChangedHandler.bind(this, "phone"),
            value: inputs.phone.value,
          }}
        />
      </View>

      <View style={{ marginTop: "50%" }}>
        <Button
          onPress={submitHandler}
          filled={true}
        >
          Save
        </Button>
      </View>
    </CustomModal>
  );
};

export default AddressModal;

const styles = StyleSheet.create({});