import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomText, Icon } from "../../components";
import { COLORS } from "../../constants";

const AddressesScreen = () => {
  const [addresses, setAddresses] = useState([]);

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <ScrollView>
        <View style={{ padding: 20, flex: 1 }}>
          <CustomText bold style={{ fontSize: 25 }}>
            My Address Book
          </CustomText>
          <CustomText
            style={{ fontSize: 14, marginTop: 10, color: COLORS.grey[500] }}
          >
            Manage your frequently used addresses here
          </CustomText>

          <View style={{ marginTop: 50 }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: COLORS.grey[100],
                paddingVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <View style={{flex: 0.9}}>
                <CustomText bold style={{ fontSize: 15 }}>
                  25 Stack Crescent, Enugu
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 13,
                    color: COLORS.grey[400],
                    marginTop: 10,
                  }}
                >
                  Okeoma Adibe
                </CustomText>
              </View>
              <Icon icon={"ellipsis-horizontal"} size={20} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddressesScreen;

const styles = StyleSheet.create({});