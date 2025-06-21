import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

type Props = {
  onContinue?: () => void;
};

const EnterOtp = ({ onContinue }: Props) => {
  return (
    <View style={styles.container}>
      <Header showTitle={false} />
      <View style={styles.maincontainer}>
        <Text style={styles.text}>Enter OTP</Text>
        <OtpInput
          numberOfDigits={4}
          onTextChange={(otp) => console.log(otp)}
          onFilled={(otp) => console.log("OTP filled:", otp)}
          autoFocus={true}
          keyboardType='numeric'
          theme={{
            pinCodeContainerStyle: styles.otpContainer,
          }}
        />
        <View style={styles.bottomcontainer}>
          <CustomButton
            title='Reset Password'
            onContinue={onContinue}
          />

          <Text style={[{ color: Colors.black }, styles.resendtext]}>
            Didn’t get OTP?{" "}
            <Text style={[{ color: Colors.primary }, styles.resendtext]}>
              Resend OTP
            </Text>
          </Text>
        </View>
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
    gap: 40,
  },
  otpContainer: {
    backgroundColor: Colors.transparent,
    width: 50,
  },
  bottomcontainer: {
    width: "100%",
    alignItems: "flex-start",
    gap: 20,
  },
  resendtext: {
    fontFamily: "poppins-regular",
    fontSize: 16,
  },
});

export default EnterOtp;
