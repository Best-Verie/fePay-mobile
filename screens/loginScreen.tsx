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
      <View style={styles.backbtnView}>
        <BackButton onPress={navigateBack} />
      </View>
      <View style={styles.logInHeaderContent}>
        <Text style={styles.headerText}>Login to your FE-Pay account</Text>
      </View>
      <View style={styles.logInForm}>
        <LoginForm />
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
    marginTop: 60,
  },
});
