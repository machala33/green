import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const Button = ({ children, filled, color, fontSize, light, onPress, full, disabled }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.button, disabled && {opacity: 0.6}, !filled && {backgroundColor: "none"}, full && styles.full]}>
      <View style={styles.textContainer}>
        <Text style={[styles.buttonText, fontSize && {fontSize}, color && {color}, light && {fontWeight: "normal"}]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    // width: "40%",
    paddingHorizontal: 55,
    textAlign: "center",
    paddingVertical: 18,
    backgroundColor: COLORS.primary[500],
    borderRadius: 5,
  },

  full: {
    width: "100%"
  },

  textContainer: {
    alignItems: "center"
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: "sofia-pro"
  },
});
