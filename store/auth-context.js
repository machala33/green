import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../util/firebase";

export const AuthContext = createContext({
  token: "",
  userId: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  isAppFirstLaunched: false,
  setIsAppFirstLaunched: () => {},
});

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(false);

  useEffect(() => {
    async function getStorage() {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }
    }

    getStorage();
  }, []);

  useEffect(() => {
    function getAuth() {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          setUserId(user.uid);
        } else {
          logout()
        }
      });

      return () => {
        unsubscribe();
      };
    }

    getAuth();
  }, []);

  const authenticate = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    userId,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    isAppFirstLaunched: isAppFirstLaunched,
    setIsAppFirstLaunched: setIsAppFirstLaunched,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
