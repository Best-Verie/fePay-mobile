import React from "react";
import { TouchableHighlight, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function BackButton(props: any) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Image
        source={require("../assets/images/back.png")}
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
    // backgroundColor: "white",
  },
  btnIcon: {
    top: 20,
    height: 30,
    width: 30,
  },
});
