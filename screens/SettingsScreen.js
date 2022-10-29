import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { CustomText, Icon } from "../components";

const SettingsScreen = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={{
        backgroundColor: COLORS.grey[100],
        flex: 1,
        paddingTop: 0,
        marginBottom: tabBarHeight,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <View
            style={{
              backgroundColor: COLORS.primary[500],
              padding: 26,
              borderRadius: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 70 / 2,
                  borderWidth: 2,
                  borderColor: "#ffffff",
                  overflow: "hidden",
                  marginRight: 15,
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                  source={require("../assets/images/No-Message.png")}
                />
              </View>

              <View>
                <CustomText bold style={{ color: "#ffffff", fontSize: 17 }}>
                  Ogechi Nwabueze
                </CustomText>
                <CustomText
                  style={{
                    color: COLORS.grey[300],
                    fontSize: 13,
                    marginTop: 10,
                  }}
                >
                  ogechieze@gmail.com
                </CustomText>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30, flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 5,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 3,
                elevation: 4,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 4 },
                // shadowOpacity: 0.10,
                shadowRadius: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: COLORS.grey[100],
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    icon={"ios-person"}
                    size={24}
                    color={COLORS.grey[600]}
                  />
                </View>
                <CustomText bold style={{ fontSize: 16, marginLeft: 20 }}>
                  Profile
                </CustomText>
              </View>

              <Icon
                icon="ios-chevron-forward"
                size={24}
                color={COLORS.grey[600]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Wallet")}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 5,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 3,
                elevation: 4,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 4 },
                // shadowOpacity: 0.10,
                shadowRadius: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: COLORS.grey[100],
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    icon={"ios-wallet"}
                    size={24}
                    color={COLORS.grey[600]}
                  />
                </View>

                <CustomText bold style={{ fontSize: 16, marginLeft: 20 }}>
                  Wallet
                </CustomText>
              </View>

              <Icon
                icon="ios-chevron-forward"
                size={24}
                color={COLORS.grey[600]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Addresses")}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 5,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 3,
                elevation: 4,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 4 },
                // shadowOpacity: 0.10,
                shadowRadius: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: COLORS.grey[100],
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    icon={"ios-location"}
                    size={24}
                    color={COLORS.grey[600]}
                  />
                </View>
                <CustomText bold style={{ fontSize: 16, marginLeft: 20 }}>
                  Addresses
                </CustomText>
              </View>

              <Icon
                icon="ios-chevron-forward"
                size={24}
                color={COLORS.grey[600]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 5,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 3,
                elevation: 4,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 4 },
                // shadowOpacity: 0.10,
                shadowRadius: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: COLORS.grey[100],
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    icon={"ios-chatbubbles"}
                    size={24}
                    color={COLORS.grey[600]}
                  />
                </View>
                <CustomText bold style={{ fontSize: 16, marginLeft: 20 }}>
                  Chat Support
                </CustomText>
              </View>

              <Icon
                icon="ios-chevron-forward"
                size={24}
                color={COLORS.grey[600]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 5,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 3,
                elevation: 4,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 4 },
                // shadowOpacity: 0.10,
                shadowRadius: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: COLORS.grey[100],
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    icon={"md-log-out"}
                    size={24}
                    color={COLORS.grey[600]}
                  />
                </View>
                <CustomText bold style={{ fontSize: 16, marginLeft: 20 }}>
                  Logout
                </CustomText>
              </View>

              <Icon
                icon="ios-chevron-forward"
                size={24}
                color={COLORS.grey[600]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
