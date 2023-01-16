import * as React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Wishlist = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wishlist}>
      <View style={[styles.barsNavigationDefaultWi, styles.barsPosition]}>
        <Image
          style={[
            styles.barsNavigationDefault,
            styles.iconLayout,
            styles.barsPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/bars--navigation--default1.png")}
        />
        <Pressable
          style={styles.iconuiback}
          onPress={() => navigation.navigate("HomeDashboard")}
        >
          <Image
            style={styles.iconLayout}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/iconuiback.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.cardLayout1, styles.cardPosition1]}
        resizeMode="cover"
        source={require("../assets/card--product.png")}
      />
      <Image
        style={[styles.cardPosition, styles.cardLayout1]}
        resizeMode="cover"
        source={require("../assets/card--product1.png")}
      />
      <Image
        style={[styles.cardLayout, styles.cardPosition1]}
        resizeMode="cover"
        source={require("../assets/card--product2.png")}
      />
      <Image
        style={[styles.cardLayout, styles.cardPosition]}
        resizeMode="cover"
        source={require("../assets/card--product3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barsPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  cardPosition1: {
    bottom: "57.27%",
    top: "17.86%",
  },
  cardLayout1: {
    left: "5.87%",
    right: "51.03%",
    width: "43.11%",
    height: "24.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition: {
    bottom: "31.4%",
    top: "43.72%",
  },
  barsNavigationDefault: {
    bottom: "0%",
  },
  iconuiback: {
    left: "4.27%",
    top: "49.14%",
    right: "89.33%",
    bottom: "30.17%",
    width: "6.4%",
    height: "20.69%",
    position: "absolute",
  },
  barsNavigationDefaultWi: {
    height: "14.29%",
    bottom: "85.71%",
    width: "100%",
    right: "0%",
    top: "0%",
  },
  cardLayout: {
    left: "51.2%",
    right: "5.69%",
    width: "43.11%",
    height: "24.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wishlist: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Wishlist;
