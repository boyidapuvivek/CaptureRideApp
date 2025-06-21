import { useFonts } from "expo-font";
import { View } from "react-native";
import SignUp from "./(auth)/SignUp";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <SignUp />
    </View>
  );
};

export default HomeScreen;
