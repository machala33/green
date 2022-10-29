import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, slides } from "../../constants";
import Button from "../UI/Button";

const OnBoardingFooter = ({ currentSlideIndex, onPress, getStarted }) => {
  return (
    <View>
      <View style={styles.footerContainer}>
        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlideIndex === index && styles.dotActive,
              ]}
            />
          ))}
        </View>

        {currentSlideIndex === slides.length - 1 ? (
          <Button onPress={getStarted} filled>
            Get Started
          </Button>
        ) : (
          <Button onPress={onPress} filled>
            Next
          </Button>
        )}
      </View>
      {/* {currentSlideIndex === slides.length - 1 ? (
        <View style={styles.footerContainer}>
          <Button onPress={getStarted} filled full>
            Get Started
          </Button>
        </View>
      ) : (
        
      )} */}
    </View>
  );
};

export default OnBoardingFooter;

const styles = StyleSheet.create({
  footerContainer: {
    height: SIZES.height * 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "yellow",
    padding: 30,
  },
  dots: {
    flexDirection: "row",
  },

  dot: {
    marginHorizontal: 3,
    height: 7,
    width: 7,
    borderRadius: 3,
    backgroundColor: COLORS.lightGrey,
  },

  dotActive: {
    backgroundColor: COLORS.primary[500],
    width: 35,
  },
});
