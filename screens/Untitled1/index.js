import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.VQBwItbN} source={require("./Screenshot 2023-06-07 at 6.25.34 PM.png")} resizeMode="cover">
          <Pressable onPress={() => {
          navigation.navigate("Untitled2");
        }}>
            <View style={styles.dPeehIkc}></View>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  VQBwItbN: {
    width: "100%",
    height: "100%"
  },
  dPeehIkc: {
    height: 126,
    width: 134,
    backgroundColor: "#E4E4E4",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 102,
    top: 244,
    opacity: 0
  }
});
export default Untitled1;