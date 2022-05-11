import React from "react";
import { TouchableHighlight, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function BackButton(props: any) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Image
        source={require("../assets/images/backIcon.svg")}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "white",
  },
  btnIcon: {
    height: 200,
    width: 200,
  },
});
