import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BackButton from "../components/BackButton";
import LoginForm from "../components/LoginForm";

export default function LoginScreen(props: any) {
  const { navigation } = props;
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.backbtnView}>
          <BackButton onPress={navigateBack} />
        </View>
        <View style={styles.screenTitle}>
          <Text style={styles.screenTitleText}>Sign in</Text>
        </View>
      </View>

      <View style={styles.logInHeaderContent}>
        <Text style={styles.headerText}>Login to your FE-Pay account</Text>
      </View>
      <View style={styles.logInForm}>
        <LoginForm />
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.bottomText}>Don't have an account? Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  logInHeaderContent: {
    marginTop: 60,
  },
  headerText: {
    textAlign: "center",
    marginLeft: 60,
    fontSize: 24,
    fontFamily: "urbanist-bold",
    fontWeight: "500",
    width: 300,
    height: 100,
    color: "#000000",
  },
  logInForm: {
    marginTop: 10,
    height: 280,
  },
  topContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  backbtnView: {
    marginLeft: 20,
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  screenTitle: {
    marginTop: 20,
    marginLeft: 70,
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  screenTitleText: {
    fontSize: 20,
    fontFamily: "urbanist-regular",
    fontWeight: "500",
  },
  bottomContent: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomText: {
    color: "#000000",
    fontSize: 16,
  },
});
