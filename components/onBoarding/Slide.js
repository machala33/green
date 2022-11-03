import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import CustomText from "../UI/CustomText";

const Slide = ({ item }) => {
  return (
    <View style={styles.slideContainer}>
      <Image style={styles.image} source={item.image} />

      <View style = {styles.details}>
        <CustomText bold style={styles.title}>{item.title}</CustomText>
        <CustomText style={styles.subTitle}>{item.description}</CustomText>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    // alignItems: "center",
    width: SIZES.width,
    justifyContent: "center",
    padding: 30,
    // backgroundColor: "red"
  },

  details: {
    marginTop: 40
  },

  image: {
    aspectRatio: 1,
    height: "auto",
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    color: COLORS.primary[500],
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  subTitle: {
    color: COLORS.grey[600],
    fontSize: 16,
    marginTop: 10,
    maxWidth: "80%",
    lineHeight: 20
  }
});
