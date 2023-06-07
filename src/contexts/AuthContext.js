import React, {
  createContext,
  useReducer,
  useMemo,
  useEffect,
  useState,
} from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import PropTypes from "prop-types";
import { act } from "react-test-renderer";
import colors from "../themes/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const initialState = Object.freeze({
  isLoggedIn: false,
  userName: null,
  userToken: null,
  passward: "",
  isLoading: false,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "RETRIVE_TOKEN": {
      return {
        isLoggedIn: true,
        userToken: action.token,
        isLoading: false,
      };
    }
    case "SIGN_IN":
      return {
        isLoggedIn: true,
        userToken: action.token,
        userName: action.id,
        passward: action.passward,
      };

    case "SIGN_OUT": {
      return {
        isLoggedIn: false,
        userName: null,
        userToken: null,
      };
    }
    case "SignUp": {
      return {
        isLoggedIn: true,
        userToken: action.token,
        userName: action.id,
      };
    }
    default:
      return initialState;
  }
};

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(
    () => ({
      auth: auth,
      signIn: async (userName, passward) => {
        let userToken;
        userToken = null;
        if (userName == "test" && passward == "123") {
          try {
            userToken = "token";
            await AsyncStorage.setItem("userToken", userToken);
          } catch (err) {
            console.log(err);
          }
        } else {
          Alert.alert("Error", "Wrong Credentail");
        }
        dispatch({
          type: "SIGN_IN",
          id: userName,
          token: userToken,
          passward: passward,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (err) {
          console.log(err);
        }
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async () => {
        try {
          await AsyncStorage.setItem();
        } catch (err) {
          console.log(err);
        }
      },
    }),
    [auth, dispatch]
  );
  useEffect(() => {
    // setIsLoading(true);
    setTimeout(async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);

      dispatch({ type: "RETRIVE_TOKEN", token: userToken });
    }, 100);
  }, []);
  // ---------
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading == true) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
