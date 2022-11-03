import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { Button, CustomText } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import IconInput from "../components/UI/IconInput";
import { COLORS } from "../constants";
import * as Linking from "expo-linking";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";
import { async } from "@firebase/util";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { auth } from "../util/firebase";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  const inputChangedHandler = (inputIdentifier, inputValue) => {
    setInputs((currInput) => ({
      ...currInput,
      [inputIdentifier]: { value: inputValue, isValid: true },
    }));
  };

  const signIn = async () => {
    setIsAuthenticating(true);
    let user = {
      email: inputs.email.value,
      password: inputs.password.value,
    };

    setIsAuthenticating(true);

    try {
      const response = await login(user.email, user.password);
      const idToken = await auth.currentUser.getIdToken()

      authContext.authenticate(idToken);
    } catch (error) {
      setIsAuthenticating(false);
      console.log(error);
    }
  };

  const submitHandler = () => {
    const emailIsValid =
      inputs.email.value.includes("@") && inputs.email.value.length > 6;
    const passwordIsValid = inputs.password.value.length >= 6;

    if (!emailIsValid || !passwordIsValid) {
      console.log("first");
      return setInputs((currInputs) => ({
        ...currInputs,
        email: { value: currInputs.email.value, isValid: emailIsValid },
        password: {
          value: currInputs.password.value,
          isValid: passwordIsValid,
        },
      }));
    }
    console.log("pee");
    signIn();
  };

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
          <CustomText bold style={{ fontSize: 30, fontWeight: "bold" }}>
            GreenGate Logistics
          </CustomText>

          <View style={{ width: "100%", marginTop: 30, marginBottom: 50 }}>
            {/* <IconInput
              icon="mail-outline"
              textInputConfig={{
                textContentType: "emailAddress",
                placeholder: "greengate@gmail.com",
              }}
              label="Email"
            /> */}
            <IconInput
              icon="mail-outline"
              textInputConfig={{
                textContentType: "email",
                placeholder: "stack@stack.stack",
                onChangeText: inputChangedHandler.bind(this, "email"),
                autoComplete: "email",
                autocorrect: false,
                value: inputs.email.value,
              }}
              inValid={!inputs.email.isValid}
              label="Email"
            />
            <IconInput
              icon="lock-closed-outline"
              textInputConfig={{
                secureTextEntry: true,
                textContentType: "password",
                placeholder: "******",
                onChangeText: inputChangedHandler.bind(this, "password"),
                autocorrect: false,
                value: inputs.password.value,
              }}
              inValid={!inputs.email.isValid}
              label="Password"
            />
          </View>

          <View style={{ width: "100%" }}>
            <Button filled full onPress={submitHandler}>
              Login
            </Button>
          </View>

          <View style={{ marginTop: 30 }}>
            <CustomText
              style={{
                color: COLORS.grey[500],
                fontSize: 14,
              }}
            >
              Not registered yet?{" "}
              <CustomText
                bold
                style={{ color: COLORS.grey[700] }}
                onPress={() => {
                  navigation.replace("Registration");
                }}
              >
                Create An Account
              </CustomText>
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
