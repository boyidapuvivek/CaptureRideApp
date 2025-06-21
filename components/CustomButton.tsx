import Colors from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onContinue?: () => void;
};

const CustomButton = ({ title, onContinue }: Props) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onContinue}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
  text: {
    fontFamily: "poppins-medium",
    fontSize: 20,
    color: Colors.white,
  },
});

export default CustomButton;
