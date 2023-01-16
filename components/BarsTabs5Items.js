import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const BarsTabs5Items = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.barsTabs5Items, style]}>
      <Text style={[styles.whiteFullSlive, styles.whiteTypo]}>
        White Full Slive Top
      </Text>
      <Text style={[styles.whiteFullSlive1, styles.whiteTypo]}>
        White Full Slive Top
      </Text>
      <Image
        style={styles.combinedShapeIcon}
        resizeMode="cover"
        source={require("../assets/combined-shape3.png")}
      />
      <View style={styles.iphoneXhomeIndicatorhomeI}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Text
        style={[styles.profile, styles.profileTypo, styles.profilePosition]}
      >
        Toko
      </Text>
      <View style={[styles.transactionsWrapper, styles.profilePosition]}>
        <Text
          style={[styles.transactions, styles.iconLayout1, styles.profileTypo]}
        >
          Cari
        </Text>
      </View>
      <View
        style={[styles.transactionsContainer, styles.socialFeedWrapperPosition]}
      >
        <Text
          style={[styles.transactions, styles.iconLayout1, styles.profileTypo]}
        >
          Profile
        </Text>
      </View>
      <Text style={styles.home}>Home</Text>
      <View
        style={[styles.socialFeedWrapper, styles.socialFeedWrapperPosition]}
      >
        <Text
          style={[styles.transactions, styles.iconLayout1, styles.profileTypo]}
        >
          Order History
        </Text>
      </View>
      <Image
        style={[
          styles.iconuihome,
          styles.iconLayout,
          styles.iconuihomePosition,
          styles.iconuihomePosition1,
        ]}
        accessible="true"
        resizeMode="cover"
        source={require("../assets/iconuihome2.png")}
      />
      <Pressable
        style={[styles.iconuisearch, styles.iconuihomePosition1]}
        onPress={() => navigation.navigate("Browse")}
      >
        <Image
          style={[styles.iconCommon, styles.iconLayout, styles.iconLayout1]}
          accessible="true"
          resizeMode="cover"
          source={require("../assets/iconuisearch3.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.iconuistore,
          styles.iconCommon,
          styles.iconLayout,
          styles.iconuihomePosition1,
        ]}
        resizeMode="cover"
        source={require("../assets/iconuistore3.png")}
      />
      <Pressable
        style={[
          styles.iconuiorder,
          styles.iconCommon,
          styles.iconuiorderLayout,
        ]}
        accessible="true"
        onPress={() => navigation.navigate("OrderHistory")}
      >
        <View style={[styles.faSolidmapMarkerAlt, styles.iconuihomePosition]} />
        <Image
          style={[
            styles.vectorIcon,
            styles.iconLayout,
            styles.iconuihomePosition,
          ]}
          accessible="true"
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.iconuiprofile,
          styles.iconCommon,
          styles.iconLayout,
          styles.iconuiorderLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconuiprofile3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whiteTypo: {
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.montserrat,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: "34.48%",
    width: "32%",
    height: "17.24%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "center",
    color: Color.neutralBlack1,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserrat,
    fontWeight: "500",
    position: "absolute",
  },
  profilePosition: {
    top: "47.13%",
    height: "13.79%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  socialFeedWrapperPosition: {
    bottom: "37.93%",
    top: "48.28%",
    height: "13.79%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconuihomePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  iconuihomePosition1: {
    bottom: "57.47%",
    top: "14.94%",
    width: "6.4%",
    height: "27.59%",
  },
  iconCommon: {
    opacity: 0.4,
    overflow: "hidden",
  },
  iconuiorderLayout: {
    width: "6.4%",
    height: "27.59%",
    opacity: 0.4,
    position: "absolute",
  },
  whiteFullSlive: {
    left: "5.33%",
  },
  whiteFullSlive1: {
    left: "52.27%",
  },
  combinedShapeIcon: {
    height: 133,
    width: 419,
  },
  iphoneXhomeIndicatorhomeIChild: {
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeI: {
    height: "39.08%",
    top: "60.92%",
    right: "0%",
    bottom: "0%",
    opacity: 0.12,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  profile: {
    width: "14.67%",
    left: "42.67%",
  },
  transactions: {
    top: "0%",
    left: "0%",
  },
  transactionsWrapper: {
    width: "19.47%",
    right: "62.4%",
    bottom: "39.08%",
    left: "18.13%",
    position: "absolute",
  },
  transactionsContainer: {
    width: "13.07%",
    right: "2.67%",
    left: "84.27%",
  },
  home: {
    width: "8.8%",
    left: "5.6%",
    fontWeight: "700",
    color: Color.brandGreen,
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    top: "47.13%",
    height: "13.79%",
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  socialFeedWrapper: {
    width: "20.53%",
    right: "18.93%",
    left: "60.53%",
  },
  iconuihome: {
    right: "86.67%",
    left: "6.93%",
  },
  iconuisearch: {
    left: "24.8%",
    right: "68.8%",
    position: "absolute",
  },
  iconuistore: {
    right: "46.67%",
    left: "46.93%",
    position: "absolute",
  },
  faSolidmapMarkerAlt: {
    top: 2,
    left: 4,
    width: 15,
    height: 20,
  },
  vectorIcon: {
    height: "83.34%",
    width: "66.67%",
    top: "8.33%",
    right: "16.67%",
    bottom: "8.33%",
    left: "16.67%",
  },
  iconuiorder: {
    top: "16.09%",
    right: "25.87%",
    bottom: "56.32%",
    left: "67.73%",
  },
  iconuiprofile: {
    top: "13.79%",
    right: "5.87%",
    bottom: "58.62%",
    left: "87.73%",
  },
  barsTabs5Items: {
    height: 76,
    width: 419,
  },
});

export default BarsTabs5Items;
