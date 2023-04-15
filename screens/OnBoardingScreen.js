import { FlatList, StyleSheet, View, StatusBar } from "react-native";
import React, { useContext, useRef, useState } from "react";

import { COLORS, SIZES, slides } from "../constants";
import { OnBoardingFooter, Slide, Button } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../store/auth-context";

const { width, height } = SIZES;


const OnBoardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const authContext = useContext(AuthContext);

  const scrollRef = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNext = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = width * nextSlideIndex;
      scrollRef?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastIndex = slides.length - 1;
    const offset = lastIndex * width;
    scrollRef?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastIndex);
  };

  const onGetStarted = () => {
    // navigation.replace("AuthStack", { screen: "Registration" });
    authContext.setIsAppFirstLaunched(false);
    AsyncStorage.setItem("isAppFirstLaunched", "false");
  };

  //   const scrollEvent = (e) => {
  //     const index = currentSlideIndex;
  //     const offset = e.nativeEvent.contentOffset.x/width
  //     console.log(index)
  //   }

  const renderSlides = ({ item }) => <Slide item={item} />;

  return (
    <View style={styles.rootContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: height * 0.8 }}
        ref={scrollRef}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
        // onScroll = {scrollEvent}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={renderSlides}
      />
      <OnBoardingFooter
        onPress={goNext}
        getStarted={onGetStarted}
        currentSlideIndex={currentSlideIndex}
      />
      {currentSlideIndex !== slides.length - 1 && (
        <View style={styles.skip}>
          <Button onPress={skip} fontSize={17} light color={COLORS.primary[500]}>
            Skip
          </Button>
        </View>
      )}
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: COLORS.white,
  },

  skip: {
    position: "absolute",
    top: 30,
    right: -10,
  },
});
