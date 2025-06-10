import Google from "@/assets/images/google.svg";
import TextInputField from "@/components/TextInputField";
import Colors from "@/constants/Colors";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignUpScreen = () => {
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
          onPress={() => {
            // Handle sign up logic here
          }}
          style={styles.button}>
          <Text style={styles.buttontext}>Sign Up</Text>
        </Pressable>
        <Text>
          Do you have account?{" "}
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: "poppins-semibold",
    fontSize: 32,
    color: Colors.primaryText,
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: Colors.transparent,
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  signuptext: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: Colors.gray,
    marginTop: 10,
  },
  bottomContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 20,
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttontext: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
  },
});

export default SignUpScreen;
