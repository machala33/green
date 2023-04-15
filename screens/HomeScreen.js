import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { CustomText, Icon } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import IconButton from "../components/UI/IconButton";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useUserContext } from "../hooks/useFormContext";
import { AuthContext } from "../store/auth-context";
import { readUserData } from "../util/auth";

const HomeScreen = ({navigation}) => {

  const {userId} = useContext(AuthContext)

  const tabBarHeight = useBottomTabBarHeight();

  const {user: {username, balance}, loading} = useUserContext()

  useEffect(() => {
  })

  
  return (
    !loading ? <>
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary[500],
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
      }}
    >
      {/* <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        style={{}}
        showsVerticalScrollIndicator={false}
      > */}
      <View
        style={{
          // flex: 1,
          padding: 20,
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText bold style={styles.greetingText}>
            Hi, {username}
          </CustomText>
          <Icon icon="ios-notifications-sharp" size={24} color="#ffffff" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  padding: 8,
                  borderRadius: 7,
                  backgroundColor: COLORS.primary[700],
                }}
              >
                <Icon icon="ios-wallet-outline" size={20} color="#ffffff" />
              </View>
              <CustomText
                style={{ color: "#ffffff", fontSize: 14, marginLeft: 10 }}
              >
                Account Balance
              </CustomText>
            </View>

            <View style={{ marginTop: 10 }}>
              <CustomText
                style={{
                  fontSize: 30,
                  fontFamily: "sofia-pro-bold",
                  color: "#ffffff",
                }}
              >
                {balance.toFixed(2)}{" "}<CustomText style={{fontSize: 14, color: "#ffffff"}}>NGN</CustomText>
              </CustomText>
            </View>
          </View>
          <View>
            <IconButton onPress={() => navigation.navigate("Wallet")}
              style={{ backgroundColor: COLORS.primary[300] }}
              filled
              bold
              icon={"chevron-forward"}
              size={24}
              color="#f1f1f1"
            >
              Fund
            </IconButton>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>

    <SafeAreaView
      // style={{ backgroundColor: "#ffffff", flex: 1, paddingTop: 0, marginBottom: tabBarHeight }}
      style={{ backgroundColor: "#ffffff", flex: 1, paddingTop: 0}}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: 20,
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <CustomText bold>History</CustomText>
            <CustomText>View all</CustomText>
          </View>
          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 5,
              padding: 20,
              elevation: 3,
              shadowColor: "#454545",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.15,
              marginBottom: 10,
              // shadowRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: COLORS.grey[200],
                paddingBottom: 20,
                borderBottomWidth: 1,
              }}
            >
              <View>
                <CustomText
                  style={{ fontSize: 16, fontFamily: "sofia-pro-bold" }}
                >
                  Parcel
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Documents
                </CustomText>
              </View>
              <View>
                <CustomText
                  style={{
                    fontSize: 16,
                    fontFamily: "sofia-pro-bold",
                    color: "#007b31",
                  }}
                >
                  Delivered
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Fri, 29th Apr
                </CustomText>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 15,
              }}
            >
              <CustomText style={{ color: COLORS.grey[600] }}>
                Trans Ekulu
              </CustomText>
              <Icon icon={"ios-arrow-forward-sharp"} size={20} />
              <CustomText style={{ color: COLORS.grey[600] }}>
                Independence La..
              </CustomText>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 5,
              padding: 20,
              elevation: 3,
              shadowColor: "#454545",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.15,
              marginBottom: 10,
              // shadowRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: COLORS.grey[200],
                paddingBottom: 20,
                borderBottomWidth: 1,
              }}
            >
              <View>
                <CustomText
                  style={{ fontSize: 16, fontFamily: "sofia-pro-bold" }}
                >
                  Parcel
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Documents
                </CustomText>
              </View>
              <View>
                <CustomText
                  style={{
                    fontSize: 16,
                    fontFamily: "sofia-pro-bold",
                    color: "#007b31",
                  }}
                >
                  Delivered
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Fri, 29th Apr
                </CustomText>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 15,
              }}
            >
              <CustomText style={{ color: COLORS.grey[600] }}>
                Trans Ekulu
              </CustomText>
              <Icon icon={"ios-arrow-forward-sharp"} size={20} />
              <CustomText style={{ color: COLORS.grey[600] }}>
                Independence La..
              </CustomText>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 5,
              padding: 20,
              elevation: 3,
              shadowColor: "#454545",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.15,
              marginBottom: 10,
              // shadowRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: COLORS.grey[200],
                paddingBottom: 20,
                borderBottomWidth: 1,
              }}
            >
              <View>
                <CustomText
                  style={{ fontSize: 16, fontFamily: "sofia-pro-bold" }}
                >
                  Parcel
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Documents
                </CustomText>
              </View>
              <View>
                <CustomText
                  style={{
                    fontSize: 16,
                    fontFamily: "sofia-pro-bold",
                    color: "#007b31",
                  }}
                >
                  Delivered
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Fri, 29th Apr
                </CustomText>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 15,
              }}
            >
              <CustomText style={{ color: COLORS.grey[600] }}>
                Trans Ekulu
              </CustomText>
              <Icon icon={"ios-arrow-forward-sharp"} size={20} />
              <CustomText style={{ color: COLORS.grey[600] }}>
                Independence La..
              </CustomText>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 5,
              padding: 20,
              elevation: 3,
              shadowColor: "#454545",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.15,
              marginBottom: 10,
              // shadowRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: COLORS.grey[200],
                paddingBottom: 20,
                borderBottomWidth: 1,
              }}
            >
              <View>
                <CustomText
                  style={{ fontSize: 16, fontFamily: "sofia-pro-bold" }}
                >
                  Parcel
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Documents
                </CustomText>
              </View>
              <View>
                <CustomText
                  style={{
                    fontSize: 16,
                    fontFamily: "sofia-pro-bold",
                    color: "#007b31",
                  }}
                >
                  Delivered
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    marginTop: 15,
                    color: COLORS.grey[500],
                  }}
                >
                  Fri, 29th Apr
                </CustomText>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 15,
              }}
            >
              <CustomText style={{ color: COLORS.grey[600] }}>
                Trans Ekulu
              </CustomText>
              <Icon icon={"ios-arrow-forward-sharp"} size={20} />
              <CustomText style={{ color: COLORS.grey[600] }}>
                Independence La..
              </CustomText>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </> : <></>

    // safe
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  greetingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
