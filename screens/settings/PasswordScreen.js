import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input } from "../../components";
import IconButton from "../../components/UI/IconButton";
import { COLORS } from "../../constants";

const PasswordScreen = () => {
  return (
    <View style = {{backgroundColor:"#ffffff", flex: 1}}>
      <ScrollView>
        <View style={{ padding: 20, flex: 1 }}>
          <Input label={"Current Password"} />
          <Input label={"New Password"} />
          <Input label={"Confirm New Password"} />
          <IconButton
            icon={"chevron-forward"}
            size={20}
            bold
            color="#ffffff"
            style={{
              backgroundColor: COLORS.primary[500],
              marginTop: 20,
              paddingVertical: 15,
            }}
          >
            Update Password
          </IconButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
