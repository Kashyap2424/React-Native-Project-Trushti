import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Buttons = (props) => {
  const { children, buttonText, onPress } = props;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    width: 340,
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "#6C63FF",
  },
  text: {
    fontSize: 23,
    color: "#fff",
    fontWeight: "700",
  },
});
