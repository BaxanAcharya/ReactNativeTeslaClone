import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Header from "./component/Header/index";
import CarsList from "./component/CarsList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
