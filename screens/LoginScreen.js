import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, CustomText } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import IconInput from "../components/UI/IconInput";
import { COLORS } from "../constants";
import * as Linking from "expo-linking";

const LoginScreen = ({navigation}) => {
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
            {/* <IconInput
              icon="mail-outline"
              textInputConfig={{
                textContentType: "emailAddress",
                placeholder: "greengate@gmail.com",
              }}
              label="Email"
            /> */}
            <IconInput
              icon="call-outline"
              textInputConfig={{
                textContentType: "telephoneNumber",
                placeholder: "080 0000 0000",
              }}
              label="Phone Number"
            />
            <IconInput
              icon="lock-closed-outline"
              textInputConfig={{
                secureTextEntry: true,
                textContentType: "password",
                placeholder: "******",
              }}
              label="Password"
            />
          </View>

          <View style={{ width: "100%" }}>
            <Button filled full onPress={() => navigation.navigate("Home")}>
              Login
            </Button>
          </View>

          <View style = {{marginTop: 10}}>
            <CustomText style = {{
              color: COLORS.grey[500],
              fontSize: 15
            }}>Not registered yet? <CustomText style = {{color: COLORS.grey[700]}} onPress={() => {navigation.navigate("Login")}}>Create An Account</CustomText></CustomText>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
