import React from "react";
import { TouchableWithoutFeedback, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function BackButton(props: any) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Image
        source={require("../assets/images/back.png")}
        style={styles.btnIcon}
      />
    </TouchableWithoutFeedback>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  btnIcon: {
    top: 20,
    height: 30,
    width: 30,
  },
});
