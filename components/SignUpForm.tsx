import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function SignUpForm(props: any) {
  const { navigation } = props;
  const [value, setValue] = useState(0);
  const onPress = () => {
    navigation.navigate("Login");
    // console.log("pressed");
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Name" style={styles.inputStyle} />
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput placeholder="Phone Number" style={styles.inputStyle} />
      </View>
      <View style={styles.submitButton}>
        <Pressable
          style={styles.button}
          // onPress={() => navigation.navigate("NumberComfirmation")}
        >
          <Text style={styles.cap}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  inputStyle: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
    marginTop: 30,
    width: 327,
    height: 54,
    borderRadius: 8,
    borderColor: "#EAECEE",
    borderWidth: 2,
  },
  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  submitButton: {
    marginTop: 40,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#4361EE",
    width: 327,
  },
  cap: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
