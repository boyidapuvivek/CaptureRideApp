import Colors from "@/constants/Colors";
import React, { useEffect, useRef, useState } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import EnterOtp from "./EnterOtp";
import FogetScreen from "./ForgotScreen";
import ResetPassword from "./ResetPassword";

const ForgotPassword = () => {
  const pageRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    pageRef.current?.setPage(pageIndex);
  };

  useEffect(() => {
    const onBackPress = () => {
      if (currentPage > 0) {
        goToPage(currentPage - 1);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );
    return () => backHandler.remove();
  }, [currentPage]);

  return (
    <PagerView
      style={{ flex: 1 }}
      initialPage={0}
      ref={pageRef}
      scrollEnabled={false}
      overdrag={false}
      onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
      <View key='1'>
        <FogetScreen onContinue={() => goToPage(1)} />
      </View>
      <View key='2'>
        <ResetPassword onContinue={() => goToPage(2)} />
      </View>
      <View key='3'>
        <EnterOtp onContinue={() => console.log("Flow Complete")} />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default ForgotPassword;
