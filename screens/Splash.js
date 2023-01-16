import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("CardBoard1")}
    >
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle7.png")}
      />
      <View style={styles.barsStatusWhite}>
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          resizeMode="cover"
          source={require("../assets/container7.png")}
        />
        <Image
          style={[styles.greenMarketLogo11, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/green-market-logo-1-1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
    height: 812,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.neutralWhite1,
    textAlign: "center",
    left: 0,
    width: 54,
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18,
  },
  containerIcon: {
    marginTop: -4.84,
    right: 15,
    width: 67,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  greenMarketLogo11: {
    top: 200,
    height: 426,
  },
  barsStatusWhite: {
    height: "5.42%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  splash: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Splash;
