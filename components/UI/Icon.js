import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ icon, size, color }) => {
  return (
    <>
      <Ionicons name={icon} size={size} color={color} />
    </>
  );
};

export default Icon;