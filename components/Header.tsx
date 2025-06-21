import BackArrow from "@/assets/images/arrow_back.svg";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title?: string;
  showTitle?: boolean;
};

const Header = ({ title, showTitle }: Props) => {
  const router = useRouter();
  const handelPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <BackArrow
        height={24}
        width={24}
        onPress={handelPress}
      />
      {showTitle && <Text>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 22,
    marginTop: 30,
  },
});

export default Header;
