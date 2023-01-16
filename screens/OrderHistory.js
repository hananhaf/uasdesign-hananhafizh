import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const OrderHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.orderHistory}>
      <Image
        style={styles.barsNavigationDefault}
        resizeMode="cover"
        source={require("../assets/bars--navigation--default.png")}
      />
      <Image
        style={[
          styles.orderHistoryChild,
          styles.orderChildLayout,
          styles.orderLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[
          styles.orderHistoryItem,
          styles.orderChildLayout,
          styles.orderLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[
          styles.orderHistoryInner,
          styles.orderChildLayout,
          styles.orderLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-295.png")}
      />
      <Image
        style={[
          styles.rectangleIcon,
          styles.orderChildLayout,
          styles.orderLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.pexelsPhoto247878Icon, styles.pexelsIconPosition]}
        resizeMode="cover"
        source={require("../assets/pexelsphoto2478789.png")}
      />
      <Image
        style={[styles.orderHistoryChild1, styles.orderHistoryChild1Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-292.png")}
      />
      <Image
        style={[styles.pexelsPhoto247878Icon1, styles.pexelsIconPosition]}
        resizeMode="cover"
        source={require("../assets/pexelsphoto24787810.png")}
      />
      <Image
        style={[styles.pexelsPhoto247878Icon2, styles.orderHistoryChild1Layout]}
        resizeMode="cover"
        source={require("../assets/pexelsphoto24787811.png")}
      />
      <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>
        Rp 4500
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>
        <Text style={styles.text2}>50%</Text>
        {` Off `}
      </Text>
      <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
        Rp 25000
      </Text>
      <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
        Rp 20000
      </Text>
      <Text style={[styles.text5, styles.textTypo, styles.textTypo1]}>
        Rp 40000
      </Text>
      <Text
        style={[styles.fashionPoint, styles.fashionTypo, styles.fashionTypo1]}
      >
        Coca Cola
      </Text>
      <Text
        style={[styles.fashionPoint1, styles.fashionTypo, styles.fashionTypo1]}
      >
        Vaseline Moisturizer
      </Text>
      <Text
        style={[styles.fashionPoint2, styles.fashionTypo, styles.fashionTypo1]}
      >
        Brokoli 1Kg
      </Text>
      <Text
        style={[styles.fashionPoint3, styles.fashionTypo, styles.fashionTypo1]}
      >
        Ikan Bandeng 1 Pack
      </Text>
      <Text style={[styles.chevronLeftMaterial, styles.chevronTypo]}></Text>
      <Text style={[styles.chevronLeftMaterial1, styles.chevronTypo]}></Text>
      <View style={styles.buttonfollow}>
        <Text style={[styles.rahul, styles.rahulTypo, styles.rahulTypo1]}>
          Delivered
        </Text>
      </View>
      <View style={[styles.day, styles.dayPosition]} />
      <Text
        style={[
          styles.september2019,
          styles.dayPosition,
          styles.rahulTypo,
          styles.profileFlexBox,
        ]}
      >
        Januari 2023
      </Text>
      <Text style={[styles.transactions, styles.fashionTypo]}>Transaksi</Text>
      <Pressable
        style={[styles.iconuilove2, styles.iconuicartPosition]}
        onPress={() => navigation.navigate("Wishlist")}
      >
        <Image
          style={styles.antDesignheartFilledIcon}
          accessible="true"
          resizeMode="cover"
          source={require("../assets/antdesignheartfilled.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.iconuicart,
          styles.iconuicartPosition,
          styles.orderChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconuicart1.png")}
      />
      <View style={[styles.buttonfollowing, styles.buttonfollowingBorder]}>
        <Text style={[styles.rahul1, styles.rahulTypo, styles.rahulTypo1]}>
          Pesanan Diterima
        </Text>
      </View>
      <View style={[styles.buttonfollowing1, styles.buttonfollowingBorder]}>
        <Text style={[styles.rahul1, styles.rahulTypo, styles.rahulTypo1]}>
          Pembayaran Diterima
        </Text>
      </View>
      <View style={[styles.buttonfollowing2, styles.buttonfollowingBorder]}>
        <Text style={[styles.rahul1, styles.rahulTypo, styles.rahulTypo1]}>
          Diproses
        </Text>
      </View>
      <View style={[styles.barsTabs5Items, styles.barsTabs5ItemsLayout]}>
        <Text style={[styles.whiteFullSlive, styles.whiteTypo]}>
          White Full Slive Top
        </Text>
        <Text style={[styles.whiteFullSlive1, styles.whiteTypo]}>
          White Full Slive Top
        </Text>
        <Image
          style={styles.barsTabs5ItemsLayout}
          resizeMode="cover"
          source={require("../assets/combined-shape1.png")}
        />
        <View style={styles.iphoneXhomeIndicatorhomeI}>
          <View style={styles.iphoneXhomeIndicatorhomeIChild} />
        </View>
        <Text
          style={[
            styles.profile,
            styles.homePosition,
            styles.rahulTypo,
            styles.rahulTypo1,
            styles.profileFlexBox,
          ]}
        >
          Store
        </Text>
        <View style={[styles.transactionsWrapper, styles.homePosition]}>
          <Text
            style={[
              styles.transactions1,
              styles.socialFeedPosition,
              styles.text1Typo,
            ]}
          >
            Cari
          </Text>
        </View>
        <View
          style={[
            styles.transactionsContainer,
            styles.socialFeedWrapperPosition,
          ]}
        >
          <Text
            style={[
              styles.transactions1,
              styles.socialFeedPosition,
              styles.text1Typo,
            ]}
          >
            Profile
          </Text>
        </View>
        <Text
          style={[
            styles.home,
            styles.homePosition,
            styles.rahulTypo1,
            styles.textTypo,
          ]}
        >
          Home
        </Text>
        <View
          style={[styles.socialFeedWrapper, styles.socialFeedWrapperPosition]}
        >
          <Text style={[styles.socialFeed, styles.socialFeedPosition]}>
            Order History
          </Text>
        </View>
        <Pressable
          style={[
            styles.iconuihome,
            styles.iconuihomeLayout,
            styles.iconuihomePosition,
          ]}
          onPress={() => navigation.navigate("HomeDashboard")}
        >
          <Image
            style={[styles.icon, styles.iconCommon]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/iconuihome1.png")}
          />
        </Pressable>
        <Pressable
          style={[
            styles.iconuisearch,
            styles.iconCommon,
            styles.iconuihomeLayout,
            styles.iconuihomePosition,
          ]}
          onPress={() => navigation.navigate("Browse")}
        >
          <Image
            style={[styles.iconuisearchChild, styles.orderChildLayout]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/group-5.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.iconuistore,
            styles.iconCommon,
            styles.iconuihomeLayout,
            styles.iconuihomePosition,
            styles.orderChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconuistore1.png")}
        />
        <Image
          style={[
            styles.iconuiorder,
            styles.iconuihomeLayout,
            styles.orderChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconuiorder.png")}
        />
        <Image
          style={[
            styles.iconuiprofile,
            styles.iconCommon,
            styles.iconuihomeLayout,
            styles.orderChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconuiprofile1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  orderLayout: {
    borderRadius: Border.br_xs,
    height: "13.3%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  pexelsIconPosition: {
    left: "4.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  orderHistoryChild1Layout: {
    height: "4.93%",
    left: "4.27%",
    right: "84.53%",
    width: "11.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    letterSpacing: 0,
  },
  textTypo1: {
    fontSize: FontSize.size_xl,
    color: Color.brandGreen,
    fontFamily: FontFamily.montserrat,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "500",
    color: Color.neutralBlack1,
  },
  fashionTypo: {
    color: Color.gray_500,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    letterSpacing: 0,
    position: "absolute",
  },
  fashionTypo1: {
    fontSize: FontSize.size_base,
    width: "45.97%",
    color: Color.gray_500,
    fontWeight: "500",
    top: "50%",
  },
  chevronTypo: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 27,
    color: Color.gray_200,
    fontSize: FontSize.size_4xl,
    left: 365,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  rahulTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
  },
  rahulTypo1: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  dayPosition: {
    left: "35.2%",
    position: "absolute",
  },
  profileFlexBox: {
    letterSpacing: 0,
    textAlign: "center",
  },
  iconuicartPosition: {
    bottom: "89.78%",
    top: "7.27%",
    width: "6.4%",
    height: "2.96%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonfollowingBorder: {
    borderWidth: 1,
    borderColor: "#33907c",
    borderStyle: "solid",
    alignItems: "center",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
    borderRadius: Border.br_md,
    position: "absolute",
    overflow: "hidden",
  },
  barsTabs5ItemsLayout: {
    height: 87,
    width: 375,
  },
  whiteTypo: {
    color: Color.gray_400,
    top: "34.48%",
    width: "32%",
    height: "17.24%",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  homePosition: {
    top: "47.13%",
    height: "13.79%",
    position: "absolute",
  },
  socialFeedPosition: {
    top: "0%",
    height: "100%",
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserrat,
    letterSpacing: 0,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  socialFeedWrapperPosition: {
    bottom: "37.93%",
    top: "48.28%",
    height: "13.79%",
    position: "absolute",
  },
  iconuihomeLayout: {
    height: "27.59%",
    width: "6.4%",
    position: "absolute",
  },
  iconuihomePosition: {
    bottom: "57.47%",
    top: "14.94%",
    height: "27.59%",
  },
  iconCommon: {
    opacity: 0.4,
    overflow: "hidden",
  },
  barsNavigationDefault: {
    height: 116,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  orderHistoryChild: {
    top: "21.06%",
    bottom: "65.64%",
  },
  orderHistoryItem: {
    top: "30.17%",
    bottom: "56.53%",
  },
  orderHistoryInner: {
    top: "39.29%",
    bottom: "47.41%",
  },
  rectangleIcon: {
    top: "48.4%",
    bottom: "38.3%",
  },
  pexelsPhoto247878Icon: {
    height: "4.68%",
    top: "51.97%",
    bottom: "43.35%",
    right: "84.53%",
    width: "11.2%",
    left: "4.27%",
  },
  orderHistoryChild1: {
    top: "25.49%",
    bottom: "69.58%",
    borderRadius: 5,
  },
  pexelsPhoto247878Icon1: {
    height: "4.8%",
    width: "10.67%",
    top: "34.24%",
    right: "85.07%",
    bottom: "60.96%",
  },
  pexelsPhoto247878Icon2: {
    top: "43.23%",
    bottom: "51.85%",
  },
  text: {
    marginTop: -181,
    width: "21.07%",
    color: Color.brandGreen,
    fontWeight: "700",
    left: "20%",
  },
  text2: {
    textDecoration: "line-through",
  },
  text1: {
    marginTop: -178,
    left: "41.07%",
    opacity: 0.7,
    color: Color.neutralBlack1,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  text3: {
    marginTop: -107,
    width: "24%",
    color: Color.brandGreen,
    fontWeight: "700",
    left: "20%",
  },
  text4: {
    marginTop: -33,
    width: "26.13%",
    left: "19.73%",
    color: Color.brandGreen,
    fontWeight: "700",
  },
  text5: {
    marginTop: 41,
    width: "26.67%",
    color: Color.brandGreen,
    fontWeight: "700",
    left: "20%",
  },
  fashionPoint: {
    marginTop: -201,
    left: "20%",
  },
  fashionPoint1: {
    marginTop: -127,
    left: "20%",
  },
  fashionPoint2: {
    marginTop: -53,
    left: "19.73%",
  },
  fashionPoint3: {
    marginTop: 21,
    left: "20%",
  },
  chevronLeftMaterial: {
    top: 207,
  },
  chevronLeftMaterial1: {
    top: 281,
  },
  rahul: {
    color: Color.neutralWhite1,
  },
  buttonfollow: {
    top: 215,
    left: 270,
    alignItems: "center",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
    borderRadius: Border.br_md,
    backgroundColor: Color.brandGreen,
    position: "absolute",
    overflow: "hidden",
  },
  day: {
    height: "3.2%",
    width: "28.53%",
    top: "18.1%",
    right: "36.27%",
    bottom: "78.69%",
    borderRadius: 6,
    opacity: 0.1,
    backgroundColor: Color.brandGreen,
    left: "35.2%",
  },
  september2019: {
    marginTop: -255,
    width: "27.73%",
    fontSize: 13,
    color: Color.brandGreen,
    fontWeight: "700",
    left: "35.2%",
    top: "50%",
    letterSpacing: 0,
  },
  transactions: {
    top: 146,
    left: 9,
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    width: 146,
    height: 27,
    fontWeight: "700",
  },
  antDesignheartFilledIcon: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconuilove2: {
    right: "16.53%",
    left: "77.07%",
  },
  iconuicart: {
    right: "5.33%",
    left: "88.27%",
  },
  rahul1: {
    color: Color.brandGreen,
  },
  buttonfollowing: {
    top: 290,
    left: 246,
    width: 125,
  },
  buttonfollowing1: {
    top: 363,
    left: 210,
  },
  buttonfollowing2: {
    top: 437,
    left: 266,
  },
  whiteFullSlive: {
    left: "5.33%",
  },
  whiteFullSlive1: {
    left: "52.27%",
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
    bottom: "0%",
    opacity: 0.12,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  profile: {
    width: "14.67%",
    left: "42.67%",
    color: Color.neutralBlack1,
  },
  transactions1: {
    color: Color.neutralBlack1,
  },
  transactionsWrapper: {
    width: "19.47%",
    right: "62.4%",
    bottom: "39.08%",
    left: "18.13%",
  },
  transactionsContainer: {
    width: "13.07%",
    right: "2.67%",
    left: "84.27%",
  },
  home: {
    width: "8.8%",
    left: "5.6%",
    display: "flex",
    alignItems: "flex-end",
    color: Color.neutralBlack1,
  },
  socialFeed: {
    color: Color.brandGreen,
    fontWeight: "700",
  },
  socialFeedWrapper: {
    width: "20.53%",
    right: "18.93%",
    left: "60.53%",
  },
  icon: {
    height: "100%",
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  iconuihome: {
    left: "6.93%",
    right: "86.67%",
  },
  iconuisearchChild: {
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    position: "absolute",
    overflow: "hidden",
  },
  iconuisearch: {
    right: "68.8%",
    left: "24.8%",
  },
  iconuistore: {
    right: "46.67%",
    left: "46.93%",
  },
  iconuiorder: {
    top: "16.09%",
    right: "25.87%",
    bottom: "56.32%",
    left: "67.73%",
    overflow: "hidden",
  },
  iconuiprofile: {
    top: "13.79%",
    right: "5.87%",
    bottom: "58.62%",
    left: "87.73%",
  },
  barsTabs5Items: {
    top: 725,
    left: -1,
    position: "absolute",
    overflow: "hidden",
  },
  orderHistory: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderHistory;
