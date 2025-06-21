import Google from "@/assets/images/google.svg";
import TextInputField from "@/components/TextInputField";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SignUpScreen = () => {
  const router = useRouter();

  const handelPress = () => {
    router.push("/LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.maincontainer}>
        <Text style={styles.text}>Sign Up</Text>
        <View style={styles.signup}>
          <Google />
          <Text style={styles.signuptext}>Google</Text>
        </View>

        <Text style={styles.divide}>Or</Text>

        <TextInputField
          placeholder='Username'
          secureTextEntry={false}
          value=''
          onChangeText={() => {}}
        />
        <TextInputField
          placeholder='Email'
          secureTextEntry={false}
          value=''
          onChangeText={() => {}}
        />
        <TextInputField
          placeholder='Password'
          secureTextEntry={true}
          value=''
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable
          onPress={() => {}}
          style={styles.button}>
          <Text style={styles.buttontext}>Sign Up</Text>
        </Pressable>
        <Text style={styles.login}>
          Do you have account?{" "}
          <Text
            style={styles.logintext}
            onPress={handelPress}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.white,
    paddingHorizontal: 22,
  },
  maincontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 50,
    gap: 20,
  },
  text: {
    fontFamily: "poppins-semibold",
    fontSize: 32,
    color: Colors.primaryText,
  },
  signup: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: Colors.transparent,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signuptext: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: Colors.gray,
  },
  bottomContainer: {
    width: "100%",
    gap: 16,
    paddingBottom: 20,
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    height: 50,
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 10,
  },
  buttontext: {
    textAlign: "center",
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: Colors.white,
  },
  login: {
    fontFamily: "poppins-regular",
    fontSize: 14,
  },
  logintext: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.primary,
  },
});

export default SignUpScreen;
