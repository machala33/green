import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, CustomText } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import IconInput from "../components/UI/IconInput";
import { COLORS } from "../constants";
import * as Linking from "expo-linking";

const RegistrationScreen = ({navigation}) => {
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
              icon="mail-outline"
              textInputConfig={{
                textContentType: "emailAddress",
                placeholder: "greengate@gmail.com",
              }}
              label="Email"
            />
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
            <Button filled full onPress={""}>
              Create Account
            </Button>
            <View style={{ marginTop: 10 }}>
              <CustomText style={{ textAlign: "center", color: COLORS.grey[500], fontSize: 12 }}>
                By Clicking on Create Account, you agree to greengate{" "}
                <CustomText
                  // onPress={() => Linking.openURL("https://expo.dev")}
                  style={{ color: COLORS.grey[600], fontWeight: "500" }}
                >
                  terms
                </CustomText>{" "}
                and {""}
                <CustomText
                  // onPress={() => Linking.openURL("https://expo.dev")}
                  style={{ color: COLORS.grey[600], fontWeight: "500" }}
                >
                  Privacy Policy
                </CustomText>
              </CustomText>
            </View>
          </View>

          <View style = {{marginTop: 40}}>
            <CustomText style = {{
              color: COLORS.grey[500],
              fontSize: 16
            }}>Already have an account? <CustomText style = {{color: COLORS.grey[700]}} onPress={() => {navigation.navigate("Login")}}>Login</CustomText></CustomText>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({});
