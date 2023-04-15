import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { COLORS } from "../../constants";

const RadioButton = ({ data, onSelect }) => {

    const selectHandler = (id) => {
        onSelect(id)
    }
  return (
    <View>
      {data.map((datum, i) => (
        <Pressable key={datum.id} style={styles.rootContainer} onPress = {() => selectHandler(datum.id)}>
          <View>
            <CustomText style={{ fontSize: 15 }}>
              {datum.name}
            </CustomText>
            <CustomText style={{ color: COLORS.grey[500], marginTop: 10 }}>
              {datum.value}
            </CustomText>
          </View>
          <View style = {[styles.radio, datum.selected && styles.activeRadio]}>
            <View style={styles.innerRadio} />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  radio: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: COLORS.grey[400],
    alignItems: "center",
    justifyContent: "center"
  },

  activeRadio: {
    backgroundColor: COLORS.green,
  },

  innerRadio: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    backgroundColor: "#ffffff"
  }
});
