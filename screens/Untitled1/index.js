import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
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
        <ImageBackground style={styles.VQBwItbN} source={require("./untitled1.png")} resizeMode="cover">
          <Pressable onPress={() => {
          navigation.navigate("Untitled2");
        }}><View style={styles.aYbfIlBN}>
            <Text style={styles.HhsMQTXA}>{"Start"}</Text>
          </View></Pressable>
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
  aYbfIlBN: {
    height: 60,
    width: 140,
    backgroundColor: "#023069",
    borderRadius: 15,
    color: "#777777",
    position: "absolute",
    left: 100,
    top: 405,
    borderColor: "#ffffff",
    borderWidth: 2
  },
  HhsMQTXA: {
    width: 69,
    height: 30,
    lineHeight: 14,
    fontSize: 27,
    borderRadius: 0,
    textAlign: "left",
    position: "absolute",
    left: 38,
    top: 21,
    color: "#ffffff"
  }
});
export default Untitled1;