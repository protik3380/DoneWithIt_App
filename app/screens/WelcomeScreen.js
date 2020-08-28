import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = (props) => (
  <ImageBackground
    blurRadius={3}
    style={styles.backgroud}
    source={require("../assets/background.jpg")}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.tagline}>Sell what you don't need !!!</Text>
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="Login" />
      <AppButton title="Register" color="secondary" />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: "gray",
  },
});

export default WelcomeScreen;
