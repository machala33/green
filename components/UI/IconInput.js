import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { forwardRef, useState } from "react";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "./CustomText";

const IconInput = forwardRef(
  ({ label, textInputConfig, icon, inValid }, ref) => {
    const [focused, setFocused] = useState(false);

    const onFocus = () => {
      setFocused(true);
    };

    const onBlur = () => {
      setFocused(false);
    };

    return (
      <View style={styles.rootContainer}>
        <CustomText style={[styles.label, inValid && {color:"#e91c1c"}]}>{label}</CustomText>
        <View
          style={[
            styles.inputContainer,
            focused && styles.focused,
            inValid && { borderColor: "#e91c1c", backgroundColor: "#fff1f1" },
          ]}
        >
          <Ionicons name={icon} size={24} color={COLORS.grey[500]} />
          <TextInput
            ref={ref}
            onFocus={onFocus}
            onBlur={onBlur}
            style={styles.input}
            {...textInputConfig}
          />
        </View>
      </View>
    );
  }
);

export default IconInput;

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 5,
  },

  label: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: "sofia-pro-bold",
    color: COLORS.grey[700],
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderColor: COLORS.grey[300],
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 10,
    backgroundColor: COLORS.grey[100],
    borderRadius: 3,
  },

  input: {
    fontSize: 15,
    fontFamily: "sofia-pro",
    paddingHorizontal: 15,
    // height: 50,
    flex: 1,
    color: COLORS.grey[600],
  },

  focused: {
    borderColor: COLORS.primary[200],
  },
});
