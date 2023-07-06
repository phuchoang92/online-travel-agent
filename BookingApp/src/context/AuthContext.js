import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    user: null,
    accessToken: null,
    refreshToken: null,
    authenticated: null,
  });

  async function loadStorageData() {
    try {
      const authDataSerialized = await AsyncStorage.getItem('token');
      if (authDataSerialized) {
        console.log("get token: "+authDataSerialized)
        await axios.post("Login/Auth", {
          accessToken: authDataSerialized,
          refreshToken: "",
        }).then(async (response) => {

          await setAuthState({
            user: response.data.data,
            accessToken: authDataSerialized,
            refreshToken: null,
            authenticated: null,
          });

          console.log(authState.user)
        }).catch(function (error) {
          console.log(error);
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setAuthState({
      user: null,
      accessToken: null,
      refreshToken: null,
      authenticated: false,
    });
  };

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <AuthContext.Provider
      value={{
        authState: authState,
        getAccessToken,
        setAuthState,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

