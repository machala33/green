import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, CustomText } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import IconInput from "../components/UI/IconInput";
import { COLORS } from "../constants";
import * as Linking from "expo-linking";
import { AuthContext } from "../store/auth-context";
import { createUser, writeUserData } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    username: {
      value: "",
      isValid: true,
    },
    email: {
      value: "",
      isValid: true,
    },
    phone: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
  });
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  function inputChangedHandler(inputIdentifier, inputValue) {
    setInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: { value: inputValue, isValid: true },
      };
    });
  }

  const signUp = async () => {
    let user = {
      email: inputs.email.value,
      username: inputs.username.value,
      phone: inputs.phone.value,
      password: inputs.password.value,
    };

    setIsAuthenticating(true);

    try {
      const response = await createUser(
        inputs.email.value,
        inputs.password.value
      );
      const tokenId = await response.getIdToken();
      const uid = await response.uid;

      writeUserData({ ...user, userId: uid });

      authContext.authenticate(tokenId);
    } catch (error) {
      setIsAuthenticating(false);
      console.log(error);
    }
  };

  const submitHandler = () => {
    const usernameIsValid = inputs.username.value.trim().length > 3;
    const emailIsValid = inputs.email.value.trim().length > 3;
    const phoneIsValid = inputs.phone.value.trim().length > 3;
    const passwordIsValid = inputs.password.value.trim().length > 3;

    if (
      !usernameIsValid ||
      !emailIsValid ||
      !phoneIsValid ||
      !passwordIsValid
    ) {
      return setInputs((currInputs) => {
        return {
          ...currInputs,
          username: {
            value: currInputs.username.value,
            isValid: usernameIsValid,
          },
          email: { value: currInputs.email.value, isValid: emailIsValid },
          phone: { value: currInputs.phone.value, isValid: phoneIsValid },
          password: {
            value: currInputs.password.value,
            isValid: passwordIsValid,
          },
        };
      });
    }

    signUp();
  };

  const username = useRef("");

  useEffect(() => {
    !isAuthenticating && username.current.focus();
  }, []);

  if (isAuthenticating) {
    return <LoadingOverlay />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
        style={{}}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <CustomText style={{ fontSize: 30, fontWeight: "bold" }}>
            GreenGate Logistics
          </CustomText>

          <View style={{ width: "100%", marginTop: 30, marginBottom: 50 }}>
            <IconInput
              ref={username}
              icon="person-outline"
              textInputConfig={{
                textContentType: "",
                placeholder: "Stack",
                onChangeText: inputChangedHandler.bind(this, "username"),
                autoComplete: "username",
                autocorrect: false,
                value: inputs.username.value,
              }}
              label="Username"
              inValid={!inputs.username.isValid}
            />

            <IconInput
              icon="mail-outline"
              textInputConfig={{
                textContentType: "emailAddress",
                placeholder: "greengate@gmail.com",
                autoComplete: "email",
                autocorrect: false,
                onChangeText: inputChangedHandler.bind(this, "email"),
                value: inputs.email.value,
              }}
              label="Email"
              inValid={!inputs.email.isValid}
            />
            <IconInput
              icon="call-outline"
              textInputConfig={{
                textContentType: "telephoneNumber",
                placeholder: "080 0000 0000",
                autoComplete: "tel",
                autocorrect: false,
                onChangeText: inputChangedHandler.bind(this, "phone"),
                value: inputs.phone.value,
              }}
              label="Phone Number"
              inValid={!inputs.phone.isValid}
            />
            <IconInput
              icon="lock-closed-outline"
              textInputConfig={{
                secureTextEntry: true,
                textContentType: "password",
                placeholder: "*******",
                onChangeText: inputChangedHandler.bind(this, "password"),
                value: inputs.password.value,
              }}
              label="Password"
              inValid={!inputs.password.isValid}
            />
          </View>

          <View style={{ width: "100%" }}>
            <Button filled full onPress={submitHandler}>
              Create Account
            </Button>
            <View style={{ marginTop: 10 }}>
              <CustomText
                style={{
                  textAlign: "center",
                  color: COLORS.grey[500],
                  fontSize: 12,
                  lineHeight: 20
                }}
              >
                By Clicking on Create Account, you agree to greengate{" "}
                <CustomText bold
                  // onPress={() => Linking.openURL("https://expo.dev")}
                  style={{ color: COLORS.primary[300] }}
                >
                  terms
                </CustomText>{" "}
                and {""}
                <CustomText bold
                  // onPress={() => Linking.openURL("https://expo.dev")}
                  style={{ color: COLORS.primary[300] }}
                >
                  Privacy Policy
                </CustomText>
              </CustomText>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <CustomText
              style={{
                color: COLORS.grey[500],
                fontSize: 14,
              }}
            >
              Already have an account?{" "}
              <CustomText bold
                style={{ color: COLORS.grey[700] }}
                onPress={() => {
                  navigation.replace("Login");
                }}
              >
                Login
              </CustomText>
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({});
