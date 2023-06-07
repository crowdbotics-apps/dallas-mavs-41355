import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.HgcDALGJ} source={require("./Screenshot 2023-06-07 at 6.29.04 PM.png")} resizeMode="cover"><Pressable onPress={() => {
          navigation.navigate("Untitled3");
        }}><View style={styles.yuHNDoKc}></View></Pressable></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HgcDALGJ: {
    width: "100%",
    height: "100%"
  },
  yuHNDoKc: {
    height: 60,
    width: 325,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 8,
    top: 479,
    borderColor: "#f6fa1f",
    opacity: 0
  }
});
export default Untitled2;