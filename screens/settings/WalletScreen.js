import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CustomText, Icon } from "../../components";
import { COLORS } from "../../constants";

const WalletScreen = () => {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <ScrollView>
        <View style={{ padding: 20, flex: 1 }}>
          <CustomText
            bold
            style={{ fontSize: 22, lineHeight: 30, marginBottom: 0 }}
          >
            How would you like to fund your wallet?
          </CustomText>

          <CustomText
            style={{ fontSize: 14, color: COLORS.grey[600], lineHeight: 22, marginTop: 10 }}
          >
            Select from below, a payment method to fund your wallet. Your wallet is funded instantaneouly.
          </CustomText>

          <View
            style={{
              backgroundColor: COLORS.primary[500],
              borderRadius: 5,
              paddingHorizontal: 15,
              paddingVertical: 40,
              marginVertical: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon icon={"ios-wallet-outline"} size={22} color="#ffffff" />
                <CustomText
                  style={{ fontSize: 16, color: "#ffffff", marginLeft: 5 }}
                >
                  Wallet Balance
                </CustomText>
              </View>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <CustomText
                  bold
                  style={{ fontSize: 30, color: "#ffffff", marginRight: 5 }}
                >
                  8,000
                </CustomText>
                <CustomText bold style={{ fontSize: 12, color: "#ffffff" }}>
                  NGN
                </CustomText>
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 30,
                borderBottomColor: COLORS.grey[200],
                borderBottomWidth: 1
              }}
            >
              <View style={{flex: 0.9}}>
                <CustomText bold style={{ fontSize: 17 }}>
                  Debit Card
                </CustomText>
                <CustomText style={{ fontSize: 13, color: COLORS.grey[600], marginTop: 10 }}>
                  Fund your account via your debit card
                </CustomText>
              </View>

              <Icon icon={"chevron-forward"} size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 30,
                borderBottomColor: COLORS.grey[200],
                borderBottomWidth: 1
              }}
            >
              <View style={{flex: 0.9}}>
                <CustomText bold style={{ fontSize: 17 }}>
                  Bank Account
                </CustomText>
                <CustomText style={{ fontSize: 13, color: COLORS.grey[600], marginTop: 10, lineHeight: 20 }}>
                  Fund your account by tranferring to a bank account
                </CustomText>
              </View>

              <Icon icon={"chevron-forward"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({});
