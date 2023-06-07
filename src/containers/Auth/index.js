import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Container,
  Button,
  TextField,
  KeyboardAvoidingView,
  Text,
  IconButton,
  Divider,
} from "components";
import Colors from "themes/colors";
import PropTypes from "prop-types";
import { scale } from "react-native-size-matters";
import { AuthContext } from "contexts/AuthContext";
import { getScreenWidth } from "utils/size";

const Auth = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  // const [data, setData] = useState({
  //   userName: "",
  //   passward: "",
  // });

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const SignInHandle = (userName, Passward) => {
    signIn(userName, Passward);
  };
  // console.log("data", username);
  // console.log("passward", password);

  return (
    <Container asGradient>
      <KeyboardAvoidingView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("images/branding/logo_with_title.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.welcome}>
            <Text font="h2" weight="medium">
              Welcome back!
            </Text>
            <Text>
              Please login with your emaill address and password to continue.
            </Text>
          </View>
          <TextField
            label="Email address"
            value={username}
            onChangeText={(data) => setUsername(data)}
          />
          <TextField
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(data) => setPassword(data)}
          />
          <View style={styles.forgot}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text color="primary" weight="medium">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            label="Sign In"
            onPress={() => {
              SignInHandle(username, password);
            }}
          />

          <Divider>
            <Text color="gray50">or</Text>
          </Divider>

          <View style={styles.socialContainer}>
            <IconButton
              iconType="MaterialCommunityIcons"
              icon="apple"
              color="gray75"
              style={styles.social}
              size={24}
            />
            <IconButton
              iconType="MaterialCommunityIcons"
              icon="facebook"
              color="blue"
              style={styles.social}
              size={24}
            />
            <IconButton
              iconType="MaterialCommunityIcons"
              icon="google"
              color="tertiary"
              style={styles.social}
              size={24}
            />
          </View>

          <View style={styles.signUpContainer}>
            <Text>{"Don't have an account?"}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text weight="medium" color="primary">
                {" "}
                Sign up now!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};
Auth.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: scale(24),
  },
  form: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: scale(24),
    paddingHorizontal: scale(14),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  welcome: {
    marginBottom: scale(14),
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: scale(14),
    flex: 1,
  },
  social: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: Colors.gray5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: scale(5),
  },
  forgot: {
    alignItems: "flex-end",
    flex: 1,
  },
  logo: {
    flex: 1,
    width: getScreenWidth() / 1.2,
    resizeMode: "contain",
  },
});

export default Auth;
