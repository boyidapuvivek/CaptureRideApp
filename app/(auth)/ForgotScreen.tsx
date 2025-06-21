import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import TextInputField from "@/components/TextInputField";
import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  onContinue: () => void;
};

const FogetScreen = ({ onContinue }: Props) => {
  return (
    <View style={styles.container}>
      <Header showTitle={false} />
      <View style={styles.maincontainer}>
        <Text style={styles.text}>Forget Password</Text>
        <TextInputField
          placeholder='Email ID/Mobile Number'
          secureTextEntry={true}
          value=''
          onChangeText={() => {}}
        />
        <CustomButton
          title='Continue'
          onContinue={onContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: "poppins-semibold",
    fontSize: 32,
    color: Colors.primary,
    marginBottom: 10,
  },
  maincontainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 22,
    gap: 30,
  },
});

export default FogetScreen;
