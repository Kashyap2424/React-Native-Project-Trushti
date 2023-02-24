import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import Inputs from "../components/Inputs/index";
import Buttons from "../components/Buttons";

const LoginScreen = () => {
  const handleLogin = () => {
    console.log("Hey, Login pressed!");
  };

  const handleRegister = () => {
    console.log("Hey, Register Pressed!");
  };

  const handleForgotPassword = () => {
    console.log("Hey, forgot password Pressed!");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Login-Background-01.png")}
        />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Login Now</Text>
          <Text style={styles.description}>
            Please enter the details below to continue
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Inputs
            headingText="Email Address"
            inputConfig={{
              keyboardType: "email-address",
            }}
          />

          <Inputs
            isPassword={true}
            headingText="Password"
            inputConfig={{
              secureTextEntry: true,
            }}
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.passwordText}>Forgot Password?</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Buttons onPress={handleLogin}>Login</Buttons>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerTextContainer}>
          Don't have an account!{" "}
          <Pressable onPress={handleRegister} style={styles.footerText}>
            <Text style={styles.registerText}>Register</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  bodyContainer: {
    height: "46%",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    marginTop: 10,
  },
  forgotPasswordContainer: {
    height: 40,
    width: 383,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  passwordText: {
    fontSize: 12,
    color: "#ff0000",
    fontWeight: "700",
  },
  heading: {
    fontSize: 37,
    marginBottom: 10,
    fontWeight: "600",
  },
  description: {
    fontSize: 15,
    fontWeight: "300",
    color: "#909090",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  footerContainer: {
    width: "100%",
    height: "7%",
    borderTopWidth: 0.3,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#6C63FF",
  },
  footerTextContainer: {
    fontSize: 15,
    fontWeight: "500",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  footerText: {
    marginTop: -2.6,
  },
  registerText: {
    fontWeight: "700",
    color: "#6C63FF",
  },
});
