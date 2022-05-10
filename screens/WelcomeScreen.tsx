import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

import { View, Text } from "react-native";

export default function WelcomeScreen(props: any) {
  const { navigation } = props;
  //   const onPress = () => {
  //     console.log("pressed");
  //     navigation.navigate("Modal");
  //   };
  // componentWillMount() {
  //     setInterval(() => {
  //         this.props.navigation.navigate("TabOneScreen");
  //     }, 5000);))
  // }
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("NotFound")}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>FE-Pay</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4361EE",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
