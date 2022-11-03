import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";

import { useFonts } from "expo-font";
import { BlurView } from "expo-blur";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import AuthProvider from "./store/auth-context";
import { AuthContext } from "./store/auth-context";
import {
  AddressesScreen,
  HistoryScreen,
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  PasswordScreen,
  ProfileScreen,
  RegistrationScreen,
  SendPackageScreen,
  SettingsScreen,
  TrackingScreen,
  WalletScreen,
} from "./screens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "./components";
import { COLORS } from "./constants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const OnBoardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        options={{
          headerShown: false,
        }}
        component = {OnBoardingScreen}
      />
      {/* {(props) => <OnBoardingScreen {...props} setIsAppFirstLaunched={setIsAppFirstLaunched} />}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  const TabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarActiveTintColor: COLORS.primary[500],
          tabBarInactiveTintColor: COLORS.grey[400],
          // tabBarBackground: () => (
          //   <BlurView tint="default" intensity={900} style={StyleSheet.absoluteFill} />
          // ),
          tabBarStyle: {
            // position: "absolute",
            // bottom: 25,
            // left: 20,
            // right: 20,
            // margin: 20,
            // marginBottom: 25,
            // borderRadius: 20,
            // elevation: 4,
            // shadowColor: "#000000",
            // shadowOffset: { width: 0, height: 8 },
            // shadowOpacity: 0.20,
            // shadowRadius: 5,
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent:"center",
            // paddingBottom: 5,
            // paddingVertical: 5,
            paddingTop: 10,
          },
        }}
        backBehavior="history"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon icon="ios-home-outline" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon icon="settings-outline" size={size} color={color} />
            ),
            headerShown: true,
            headerLeftLabelVisible: true,
          }}
        />

        <Tab.Screen
          name="SendPackag"
          component={SendPackageScreen}
          options={{
            tabBarActiveTintColor: "#ffffff",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon icon="ios-send-outline" size={size} color={color} focused />
            ),
            tabBarItemStyle: {
              // backgroundColor: COLORS.primary[500],
              // borderRadius: 100,
              // color: "#ffffff",
            },
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("SendPackage");
            },
          })}
        />

        <Tab.Screen
          name="Tracking"
          component={TrackingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon icon="location-outline" size={size} color={color} />
            ),
            headerShown: true,
            headerLeftLabelVisible: true,
          }}
        />

        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="history" size={size} color={color} />
            ),
            headerShown: true,
            headerLeftLabelVisible: true,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headersShown: true,
      }}
    >
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Addresses" component={AddressesScreen} />
      <Stack.Screen
        name="SendPackage"
        component={SendPackageScreen}
        options={{
          presentation: "modal",
          headerShown: true,
          headerBackVisible: "true",
        }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* {isAppFirstLaunched ? <OnBoardingStack setIsAppFirstLaunched={setIsAppFirstLaunched} /> : authContext.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />} */}
      {authContext.isAppFirstLaunched && <OnBoardingStack />}
      {!authContext.isAuthenticated && <AuthStack />}
      {authContext.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default function App() {
  const [isLoaded] = useFonts({
    "sofia-pro": require("./assets/fonts/Metropolis-Medium.otf"),
    "sofia-pro-bold": require("./assets/fonts/Metropolis-Bold.otf"),
  });
  // const authContext = useContext(AuthContext);
  // const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(false);

  // useEffect(() => {
  //   async function getStorage() {
  //     const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //     if (appData == null) {
  //       setIsAppFirstLaunched(true);
  //       AsyncStorage.setItem("isAppFirstLaunched", "false");
  //     } else {
  //       setIsAppFirstLaunched(false);
  //     }
  //   }

  //   getStorage();
  // }, []);

  if (!isLoaded) {
    return null;
  }

  // const isAuthenticated = authContext.isAuthenticated

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        {/* <NavigationContainer> */}
          <Navigation />
          {/* <Stack.Navigator> */}
          {/* {isAppFirstLaunched ? <OnBoardingStack setIsAppFirstLaunched={setIsAppFirstLaunched} /> : authContext.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />} */}
          {/* {isAppFirstLaunched && <OnBoardingStack setIsAppFirstLaunched={setIsAppFirstLaunched} />}
          {!authContext.isAuthenticated && <AuthStack />}
          {authContext.isAuthenticated && <AuthenticatedStack />} */}
          {/* {isAppFirstLaunched ? (
              <Stack.Group
                screenOptions={{
                  headerShown: true,
                }}
              >
                <Stack.Screen
                  name="Registration"
                  component={RegistrationScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                  name="TabNavigation"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Password" component={PasswordScreen} />
                <Stack.Screen name="Wallet" component={WalletScreen} />
                <Stack.Screen name="Addresses" component={AddressesScreen} />
                <Stack.Screen
                  name="SendPackage"
                  component={SendPackageScreen}
                  options={{
                    presentation: "modal",
                    headerShown: true,
                    headerBackVisible: "true",
                  }}
                />
              </Stack.Group>
            ) : (
              <Stack.Group
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="Home" component={HomeScreen} />
              </Stack.Group>
            )} */}
          {/* </Stack.Navigator> */}
        {/* </NavigationContainer> */}
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
