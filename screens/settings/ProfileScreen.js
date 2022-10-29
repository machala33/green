import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { CustomText, Icon, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style = {{backgroundColor: "#ffffff", flex: 1}}>
      <ScrollView>
        <View style={{ padding: 20, flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={{
                // overflow: "hidden",
                height: 140,
                width: 140,
                borderRadius: 140 / 2,
                borderColor: COLORS.primary[500],
                borderWidth: 4,
                padding: 10,
                borderStyle: "dotted",
                position: "relative",
              }}
            >
              <Image
                source={require("../../assets/images/No-Message.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: 1,
                  resizeMode: "contain",
                }}
              />
              <View
                style={{
                  padding: 10,
                  backgroundColor: COLORS.primary[500],
                  alignItems: "center",
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: [{ translateX: -10 }, { translateY: 20 }],
                  borderRadius: 50,
                }}
              >
                <Icon icon={"camera"} size={20} color="#ffffff" />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Input
              label={"First Name"}
              textInputConfig={{
                placeholder: "Stack",
              }}
            />

            <Input
              label={"Last Name"}
              textInputConfig={{
                placeholder: "Professional",
              }}
            />

            <Input
              label={"Email Address"}
              textInputConfig={{
                placeholder: "stackpro@stack.com",
              }}
            />

            <Input
              label={"Phone"}
              textInputConfig={{
                placeholder: "051785541598",
              }}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("Password")}
              style={{ marginTop: 10 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <CustomText bold style={{ fontSize: 16 }}>
                  Password
                </CustomText>
                <Icon icon={"chevron-forward"} size={24} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
