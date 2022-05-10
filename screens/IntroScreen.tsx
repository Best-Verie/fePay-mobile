import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FE-Pay</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("./../assets/images/intro.png")}
        />
      </View>
      <View style={styles.descriptionTexts}>
        <Text style={styles.ultimateText}>
          Have the ultimate control to your experience.
        </Text>
        <Text style={styles.lighDescrText}>
          FE-Pay lets you control your money without limitations
        </Text>
      </View>
      <View style={styles.getStarted}>
        <Button title="Get Started" color="#4361EE" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4361EE",
    marginTop: 130,
  },
  imgContainer: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  descriptionTexts: {
    marginTop: 20,
  },
  ultimateText: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "urbanist-bold",
  },
  lighDescrText: {
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
    textAlign: "center",
    lineHeight: 20,
    fontFamily: "urbanist-regular",
  },
  getStarted: {
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#4361EE",
    borderRadius: 24,
    blendMode: "passthrough",
  },
});
