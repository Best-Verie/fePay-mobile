import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BackButton from "../components/BackButton";
import SignUpForm from "../components/SignUpForm";
export default function SignUpScreen(props: any) {
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
          <Text style={styles.screenTitleText}>Sign up</Text>
        </View>
      </View>
      <View style={styles.signUpHeaderContent}>
        <Text style={styles.headerText}>Create your FE-Pay account</Text>
      </View>
      <View style={styles.signUpForm}>
        <SignUpForm />
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.bottomText}>Already have an account? Sign In</Text>
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

  signUpHeaderContent: {
    marginTop: 100,
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
    marginTop: 0,
    height: 420,
    backgroundColor: "#fff",
  },
  bottomContent: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomText: {
    color: "#000000",
    fontSize: 16,
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
});
