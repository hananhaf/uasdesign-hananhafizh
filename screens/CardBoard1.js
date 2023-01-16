import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CardBoard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cardboard1, styles.rectangleLayout]}>
      <View
        style={[
          styles.rectangle,
          styles.rectanglePosition,
          styles.rectangleLayout,
        ]}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={[styles.rectangle1, styles.rectangle1Position]} />
      <Text style={[styles.empoweringArtisans, styles.nextTypo]}>
        <Text
          style={styles.tokoSayurOnline}
        >{`Toko Sayur Online Pertama `}</Text>
        <Text style={styles.tokoSayurOnline}>di Solo</Text>
      </Text>
      <Image
        style={styles.cardboard1Child}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Pressable
        style={styles.buttoncallToAction}
        accessible="true"
        onPress={() => navigation.navigate("CardBoard2")}
      >
        <View style={[styles.frame, styles.framePosition]} />
        <Text style={[styles.next, styles.nextTypo]}>Lanjut</Text>
      </Pressable>
      <StatusBar style={styles.framePosition} barStyle="default" />
      <ImageBackground
        style={[styles.orangePurpleRadiantFreshGr, styles.rectangle1Position]}
        resizeMode="cover"
        source={require("../assets/orangepurpleradiantfreshgrocerystorefacebookpost11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 812,
    backgroundColor: Color.brandGreen,
  },
  rectanglePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangle1Position: {
    top: 191,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  framePosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangle: {
    top: 812,
  },
  rectangleIcon: {
    top: 358,
    height: 454,
  },
  rectangle1: {
    left: 31,
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutralWhite1,
    width: 307,
    height: 334,
  },
  tokoSayurOnline: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  empoweringArtisans: {
    marginTop: 161,
    width: "75.47%",
    top: "50%",
    left: "12.27%",
    fontSize: FontSize.size_3xl,
    letterSpacing: 0,
    lineHeight: 30,
    fontWeight: "500",
    color: Color.brandGreen,
  },
  cardboard1Child: {
    top: 681,
    left: 160,
    width: 56,
    height: 12,
    position: "absolute",
  },
  frame: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_md,
    backgroundColor: Color.brandGreen,
    left: "0%",
    right: "0%",
    top: "0%",
  },
  next: {
    width: "82.64%",
    top: "31.25%",
    left: "7.07%",
    fontSize: FontSize.size_2xl,
    lineHeight: 18,
    fontWeight: "600",
    color: Color.neutralWhite1,
  },
  buttoncallToAction: {
    top: 743,
    left: 34,
    width: 306,
    height: 48,
    position: "absolute",
  },
  orangePurpleRadiantFreshGr: {
    left: 28,
    width: 319,
    height: 296,
  },
  cardboard1: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
  },
});

export default CardBoard1;
