import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CardBoard2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cardboard2, styles.rectangleLayout]}>
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
      <Text style={styles.connectingNgosSoc}>
        Langsung dari Petani Petani yang ada di Tawangmangu
      </Text>
      <View style={[styles.rectangle1, styles.rectangle1Position]} />
      <Image
        style={[styles.cardboard2Child, styles.containerIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-32.png")}
      />
      <Pressable
        style={[styles.buttoncallToAction, styles.buttoncallToActionLayout]}
        accessible="true"
        onPress={() => navigation.navigate("CardBoard3")}
      >
        <View style={[styles.frame, styles.framePosition]} />
        <Text style={[styles.next, styles.nextTypo]}>Lanjut</Text>
      </Pressable>
      <View style={[styles.barsStatusWhite, styles.framePosition]}>
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition, styles.nextTypo]}>
            9:41
          </Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.containerIconLayout]}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
      </View>
      <ImageBackground
        style={[
          styles.greenAndYellowPatternGroce,
          styles.buttoncallToActionLayout,
          styles.rectangle1Position,
        ]}
        resizeMode="cover"
        source={require("../assets/greenandyellowpatterngrocerystorediscountposter1.png")}
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
    left: 31,
    top: 191,
  },
  containerIconLayout: {
    height: 12,
    position: "absolute",
  },
  buttoncallToActionLayout: {
    width: 306,
    position: "absolute",
  },
  framePosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  nextTypo: {
    color: Color.neutralWhite1,
    fontWeight: "600",
    lineHeight: 18,
    textAlign: "center",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    top: 812,
  },
  rectangleIcon: {
    top: 358,
    height: 454,
  },
  connectingNgosSoc: {
    marginTop: 161,
    width: "82.67%",
    left: "8.53%",
    fontSize: FontSize.size_3xl,
    lineHeight: 30,
    fontWeight: "500",
    color: Color.brandGreen,
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  rectangle1: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutralWhite1,
    width: 307,
    height: 334,
    position: "absolute",
    left: 31,
    top: 191,
  },
  cardboard2Child: {
    top: 681,
    left: 160,
    width: 56,
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
    fontFamily: FontFamily.montserrat,
    color: Color.neutralWhite1,
    fontWeight: "600",
    lineHeight: 18,
    position: "absolute",
  },
  buttoncallToAction: {
    top: 743,
    left: 34,
    height: 48,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sFProText,
    color: Color.neutralWhite1,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0,
    width: 54,
    left: 0,
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
    top: "50%",
    height: 12,
  },
  barsStatusWhite: {
    height: "5.42%",
    bottom: "94.58%",
  },
  greenAndYellowPatternGroce: {
    height: 321,
  },
  cardboard2: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
  },
});

export default CardBoard2;
