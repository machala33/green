import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button, CustomText } from "../../components";
import { COLORS } from "../../constants";
import { useUserContext } from "../../hooks/useFormContext";
import { db, ref, update } from "../../util/firebase";
import { AuthContext } from "../../store/auth-context";

const SummaryScreen = () => {
  const { userId } = useContext(AuthContext);
  const {
    user: { balance },
    deliveryDetails: {price, senderName, senderAddress, receiverName, receiverAddress, category, description, weight},
    onsetDeliveryDetails,
  } = useUserContext();
  const [isBalanceSufficient, setIsBalanceSufficient] = useState(false);

  const proceed = () => {
    if (price <= balance) {
      const newUserBalance = balance - price;

      const userRef = ref(db, `users/${userId}`);
      update(userRef, {
        balance: newUserBalance,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Alert.alert("Not Enought balance");
    }
  };

  useEffect(() => {
    const price = 3400;
    onsetDeliveryDetails("price", price);

    if (balance >= price) {
      setIsBalanceSufficient(true);
    }
  }, [balance]);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#ffffff",
          flex: 1,
          paddingTop: 30,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: COLORS.grey[100],
            borderBottomWidth: 1,
            paddingVertical: 20,
          }}
        >
          <CustomText>Sender</CustomText>
          <View>
            <CustomText>{senderName}</CustomText>
            <CustomText style={{ color: COLORS.grey[300], marginTop: 5 }}>
              {senderAddress}
            </CustomText>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: COLORS.grey[100],
            borderBottomWidth: 1,
            paddingVertical: 20,
          }}
        >
          <CustomText>Receiver</CustomText>
          <View>
            <CustomText>{receiverName}</CustomText>
            <CustomText style={{ color: COLORS.grey[300], marginTop: 5 }}>
              {receiverAddress}
            </CustomText>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <CustomText style={{ marginBottom: 25, fontSize: 15 }}>
            PACKAGES
          </CustomText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: COLORS.grey[100],
              borderBottomWidth: 1,
              paddingVertical: 20,
            }}
          >
            <CustomText style={{ marginBottom: 5 }}>Item(s)</CustomText>
            <View>
              <CustomText style={{ marginBottom: 5 }}>
                {category}
              </CustomText>
              <CustomText
                style={{
                  marginBottom: 5,
                  fontSize: 13,
                  color: COLORS.grey[300],
                }}
              >
                {description}
              </CustomText>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: COLORS.grey[100],
              borderBottomWidth: 1,
              paddingVertical: 20,
            }}
          >
            <CustomText style={{ marginBottom: 5 }}>Net Weight</CustomText>
            <View>
              <CustomText style={{ marginBottom: 5 }}>
                {weight}
              </CustomText>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: COLORS.grey[100],
              borderBottomWidth: 1,
              paddingVertical: 20,
            }}
          >
            <CustomText style={{ marginBottom: 5 }}>Delivery Date</CustomText>
            <View>
              <CustomText style={{ marginBottom: 5 }}>
                {/* {new Date().toUTCString().slice(5, 16)} */}
              </CustomText>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Button
              disabled={!isBalanceSufficient}
              onPress={() => {
                proceed();
              }}
              filled={true}
            >
              {price ? "Pay N" + price.toLocaleString() : <ActivityIndicator size="small" /> }
            </Button>
            {!isBalanceSufficient && (
              <CustomText
                style={{
                  color: COLORS.error,
                  marginTop: 20,
                  alignSelf: "center",
                }}
              >
                You have insufficient balance to make this order
              </CustomText>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({});
