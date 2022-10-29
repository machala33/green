import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { CustomText, Icon } from "../components";
import { MaterialCommunityIcons } from "@expo/vector-icons"

const TrackingScreen = () => {
  const [step, setStep] = useState(2);

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
        <View style={{ padding: 20 }}>
          {/* <View style={{ position: "relative" }}>
            <View
              style={{ width: "100%", height: 2, backgroundColor: COLORS.grey[300] }}
            />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                position: "absolute",
                top: 0,
                left: 0
              }}
            >
              <View
                style={{
                  minWidth: 10,
                  minHeight: 10,
                  borderRadius: 5,
                  backgroundColor: COLORS.grey[300],
                }}
              />
              <View
                style={{
                  minWidth: 10,
                  minHeight: 10,
                  borderRadius: 5,
                  backgroundColor: COLORS.grey[300],
                }}
              />
              <View
                style={{
                  minWidth: 10,
                  minHeight: 10,
                  borderRadius: 5,
                  backgroundColor: COLORS.grey[300],
                }}
              />
            </View>
          </View> */}

          <TouchableOpacity
            style={{
              backgroundColor: "#ffffff",
              marginVertical: 10,
              padding: 15,
              elevation: 4,
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <CustomText bold style={{ fontSize: 16, marginBottom: 10 }}>
                  #9827332
                </CustomText>
                <CustomText style={{ fontSize: 13, color: COLORS.grey[400] }}>
                  Parcel
                </CustomText>
              </View>
              <View
                style={{
                  backgroundColor: "#fffd96",
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CustomText bold style={{ color: "#b3ad02" }}>
                  Transit
                </CustomText>
              </View>
            </View>

            <View style={{ flexDirection: "row", paddingTop: 20 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                <View
                  style={{
                    minWidth: 10,
                    minHeight: 10,
                    padding: step === 1 ? 10 : 0,
                    backgroundColor:
                      step >= 1 && step && step <= 4
                        ? COLORS.green
                        : COLORS.grey[300],
                    borderRadius: 50,
                  }}
                >
                  {step === 1 && (
                    <Icon icon={"cube-outline"} color="#ffffff" size={24} />
                  )}
                </View>
                <View
                  style={{
                    height: 3,
                    flex: 1,
                    backgroundColor:
                      step >= 2 && step <= 4 ? COLORS.green : COLORS.grey[300],
                  }}
                />
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                <View
                  style={{
                    minWidth: 10,
                    minHeight: 10,
                    padding: step === 2 ? 10 : 0,
                    backgroundColor:
                      step >= 2 && step <= 4 ? COLORS.green : COLORS.grey[300],
                    borderRadius: 50,
                  }}
                >
                  {step === 2 && (
                    // <Icon icon={"cube-outline"} color="#ffffff" size={24} />
                    <MaterialCommunityIcons name="truck-delivery-outline" size={24} color = "#ffffff"/>
                  )}
                </View>
                <View
                  style={{
                    height: 3,
                    flex: 1,
                    backgroundColor:
                      step >= 3 && step <= 4 ? COLORS.green : COLORS.grey[300],
                  }}
                />
              </View>

              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                <View
                  style={{
                    minWidth: 10,
                    minHeight: 10,
                    padding: step === 3 ? 10 : 0,
                    backgroundColor:
                      step >= 3 && step <= 4 ? COLORS.green : COLORS.grey[300],
                    borderRadius: 50,
                  }}
                >
                  {step === 3 && (
                    <Icon icon={"cube-outline"} color="#ffffff" size={24} />
                  )}
                </View>
                <View
                  style={{
                    height: 3,
                    flex: 1,
                    backgroundColor:
                      step === 4 ? COLORS.green : COLORS.grey[300],
                  }}
                />
                <View
                  style={{
                    minWidth: 10,
                    minHeight: 10,
                    padding: step === 4 ? 10 : 0,
                    backgroundColor:
                      step === 4 ? COLORS.green : COLORS.grey[300],
                    borderRadius: 50,
                  }}
                >
                  {step === 4 && (
                    <Icon icon={"cube-outline"} color="#ffffff" size={24} />
                  )}
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 20,
              }}
            >
              <View>
                <CustomText
                  style={{
                    color: COLORS.grey[400],
                    marginBottom: 5,
                    fontSize: 12,
                  }}
                >
                  29th July. 09: 38
                </CustomText>
                <CustomText style={{ color: COLORS.grey[600] }}>
                  Trans Ekulu
                </CustomText>
              </View>
              <Icon icon={"ios-arrow-forward-sharp"} size={20} />
              <View>
                <CustomText
                  style={{
                    color: COLORS.grey[400],
                    marginBottom: 5,
                    fontSize: 12,
                  }}
                >
                  29th July. 09: 38
                </CustomText>
                <CustomText style={{ color: COLORS.grey[600] }}>
                  Independence La...
                </CustomText>
              </View>
            </View>

            
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrackingScreen;

const styles = StyleSheet.create({});
