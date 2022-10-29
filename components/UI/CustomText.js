import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const CustomText = ({ children, style, onPress, bold }) => {
  return (
    <>
      <Text
        includeFontPadding={false}
        onPress={onPress}
        style={[
          {
            fontFamily: bold ? "sofia-pro-bold" : "sofia-pro",
            color: COLORS.grey[800],
            textAlignVertical: "center",
          },
          style,
        ]}
      >
        {children}
      </Text>
    </>
  );
};

export default CustomText;
