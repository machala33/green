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

const HistoryScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={{
        backgroundColor: COLORS.grey[100],
        flex: 1,
        paddingTop: 0,
        marginBottom: tabBarHeight,
      }}
      // edges={1}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <View
            style={{
              backgroundColor: "#ffffff",
              padding: 26,
              borderRadius: 14,
              elevation: 4,
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomText bold style={{ fontSize: 16 }}>
                All
              </CustomText>
              <CustomText style={{ fontSize: 16 }}>Ongoing</CustomText>
              <CustomText style={{ fontSize: 16 }}>Delivered</CustomText>
            </View>
          </View>

          <View style={{ marginTop: 20, flex: 1 }}>
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
                  <CustomText
                    bold
                    style={{ color: "#b3ad02"}}
                  >
                    Transit
                  </CustomText>
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
                  <CustomText
                    bold
                    style={{ color: "#b3ad02"}}
                  >
                    Transit
                  </CustomText>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
