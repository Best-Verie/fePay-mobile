import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";

export default function LoginForm(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.inputStyle} />
      <TextInput placeholder="PIN" style={styles.inputStyle} />
      <View style={styles.submitButton}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("root")}
        >
          <Text style={styles.cap}>Login</Text>
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
    height: 50,
  },
  cap: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
