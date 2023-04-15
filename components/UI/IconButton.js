import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import CustomText from "./CustomText";

const IconButton = ({
  children,
  disabled,
  icon,
  color,
  textColor,
  size,
  style,
  filled,
  bold,
  onPress,
}) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      onPress={onPress}
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
        //   borderWidth: 1,
          borderRadius: 5,
        },
        !filled && {borderColor: color},
        disabled && {opacity: 0.6},
        style,
      ]}
    >
      <CustomText style={[{ color, fontSize: 15}, bold && {fontFamily: "sofia-pro-bold"}]}>{children}</CustomText>
      <Icon icon={icon} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
