import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../util/firebase";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  isAppFirstLaunched: false,
  setIsAppFirstLaunched: () => {},
});

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
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

  // useEffect(() => {
  //   function getAuth() {
  //     auth.onAuthStateChanged(async (user) => {
  //       if (user) {
  //         const token = await user.getIdToken();
  //       }
  //     });
  //   }

  //   getAuth();
  // });

  const authenticate = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    isAppFirstLaunched: isAppFirstLaunched,
    setIsAppFirstLaunched: setIsAppFirstLaunched,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
