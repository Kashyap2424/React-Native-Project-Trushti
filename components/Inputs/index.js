import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";

const Inputs = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { headingText, inputConfig, isPassword } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textInputHeading}>{headingText}</Text>
      <TextInput
        {...inputConfig}
        style={styles.inputs}
        secureTextEntry={isVisible ? true : false}
      />

      {isPassword ? (
        <Pressable
          onPress={() => setIsVisible((currentState) => !currentState)}
          style={styles.iconContainer}
        >
          {isVisible ? (
            <Image
              style={styles.icon}
              source={require("../../assets/images/eye-off-line-icon.png")}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require("../../assets/images/eye-line-icon.png")}
            />
          )}
        </Pressable>
      ) : null}
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 50,
    marginTop: 30,
  },
  textInputHeading: {
    fontSize: 14,
    marginBottom: 6,
  },
  inputs: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f1f1f1",
  },
  iconContainer: {
    width: 20,
    height: 20,
    position: "absolute",
    top: "65%",
    right: "4%",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
