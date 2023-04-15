import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    error:"#d52222",
    "white": "#FFFFFF",
    "accent1": "#392832",
    green: "#09a42b",
    primary: {
        100: "#b5cbf3",
        200: "#467aba",
        300: "#376195",
        500: "#1c58a2",
        700: "#142a46"
    },
    dark: "#242E38",
    grey: {
        234: "#fffd96",
        235: "#b3ad02",
        50: "#f9f9f9",
        100: "#f4f4f4",
        200: "#e1e1e1",
        300: "#d1d1d1",
        400: "#a9a9a9",
        500: "#959595",
        600: "#6d6d6d",
        700: "#5e5e5e",
        800: "#464646",
    },
    lightGrey: "#c7c7c7"
}

export const SIZES = {
    base: 8,
    font: 14,
    radius:12,
    padding: 24,

    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    width,
    height
}

export const FONTS = {
    h1: {

    }
}

const appTheme = {
    COLORS, SIZES, FONTS
}

export default appTheme;