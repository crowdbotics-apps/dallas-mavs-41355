import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.HgcDALGJ} source={require("./untitled2.png")} resizeMode="cover">
          <Pressable onPress={() => {
          navigation.navigate("Untitled3");
        }}>
            <View style={styles.yuHNDoKc}></View>
          </Pressable>
        <Pressable onPress={() => {
          navigation.navigate("Untitled3");
        }}><View style={styles.pSukEnZR}><Text style={styles.GMPwVdVq}>{"Lowest Price"}</Text></View></Pressable></ImageBackground>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
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
  },
  pSukEnZR: {
    height: 39,
    width: 157,
    backgroundColor: "#023069",
    borderRadius: 7,
    color: "#777777",
    position: "absolute",
    left: 11,
    top: 428
  },
  GMPwVdVq: {
    width: 88,
    height: 19,
    lineHeight: 14,
    fontSize: 13,
    borderRadius: 0,
    fontFamily: "Open Sans",
    color: "#FFF",
    position: "absolute",
    left: 34,
    top: 11
  }
});
export default Untitled2;