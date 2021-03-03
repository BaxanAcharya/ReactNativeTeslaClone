import React from "react";
import styles from "./styles";
import cars from "./cars";
import { View, FlatList, Dimensions } from "react-native";
import CardItem from "../CardItem/index";
const CarsList = () => {
  return (
    <View style={styles.contanier}>
      <FlatList
        data={cars}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
