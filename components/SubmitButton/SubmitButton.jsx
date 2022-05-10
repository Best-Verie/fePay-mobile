import { View, StyleSheet } from "react-native";

export default function SubmitButton(props) {
  return (
    <View>
      <button type="submit" style={styles.btn}>
        {props.children}
      </button>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#4361EE",
    borderRadius: 24,
    blendMode: "passthrough",
  },
});
