import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BackButton from "../components/BackButton";

export default function NumberConfirmationScreen(props: any) {
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
          <Text style={styles.screenTitleText}>Confirm your number</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
