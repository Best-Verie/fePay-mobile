import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BackButton from "../components/BackButton";
import SignUpForm from "../components/SignUpForm";
import SubmitButton from "../components/SubmitButton";
export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.backbtnView}>{/* <BackButton /> */}</View>
      <View style={styles.signUpHeaderContent}>
        <Text style={styles.headerText}>Create your FE-Pay account</Text>
      </View>
      <View style={styles.signUpForm}>
        <SignUpForm />
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
  backbtnView: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "#fff",
  },
  signUpHeaderContent: {
    marginTop: 60,
    height: "10%",
  },
  headerText: {
    textAlign: "center",
    marginLeft: 60,
    fontSize: 24,
    fontFamily: "urbanist-bold",
    fontWeight: "500",
    width: 300,
    height: 38,
    lineHeight: 29,
    color: "#000000",
  },
  signUpForm: {
    marginTop: 40,
    height: "60%",
    backgroundColor: "#fff",
  },
});
