import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Button from "./styledbutton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Custom Order"
          onPress={() => {
            console.warn("Custom Order was pressed.");
          }}
        />
        <Button
          type="secondary"
          text="Existing Inventory"
          onPress={() => {
            console.warn("Existing Inventory was pressed.");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
