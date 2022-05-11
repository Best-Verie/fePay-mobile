import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import SubmitButton from "../components/SubmitButton";

export default function IntroScreen(props: any) {
  const { navigation } = props;
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
        <SubmitButton title="Get Started" />
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
        <View style={styles.bottomContent}>
          <Text style={styles.bottomText}>Login to FE-Pay</Text>
        </View>
      </TouchableWithoutFeedback>
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
    marginTop: 40,
  },
  ultimateText: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "urbanist-bold",
  },
  lighDescrText: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
    textAlign: "center",
    lineHeight: 20,
    fontFamily: "urbanist-regular",
  },

  getStarted: {
    marginTop: 40,
  },
  bottomContent: {
    marginTop: 20,
  },
  bottomText: {
    marginTop: 20,
    fontSize: 16,
    color: "#4361EE",
    textDecorationStyle: "solid",
  },
});
