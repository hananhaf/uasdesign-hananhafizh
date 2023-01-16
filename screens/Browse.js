import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Browse = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.browse}>
      <View
        style={[
          styles.barsStatusWhite,
          styles.transactionsPosition,
          styles.barsPosition,
        ]}
      >
        <View style={[styles.action, styles.actionPosition]}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.containerIconPosition]}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
      </View>
      <Image
        style={styles.cardProductWithSale}
        resizeMode="cover"
        source={require("../assets/card--product-with-sale.png")}
      />
      <View style={[styles.cardProduct, styles.cardPosition1]}>
        <Image
          style={[styles.cardProductChild, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <Image
          style={[
            styles.pexelsPhoto247878Icon,
            styles.iconChildLayout,
            styles.transactionsPosition,
            styles.barsPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/pexelsphoto24787812.png")}
        />
        <Text style={styles.whiteFullSlive}>Alat Mandi</Text>
        <Text style={[styles.rahul, styles.textPosition, styles.homeClr]}>
          Tradly
        </Text>
        <Text style={[styles.text, styles.textClr, styles.textPosition]}>
          $25
        </Text>
        <Image
          style={styles.iconavataravatar2}
          resizeMode="cover"
          source={require("../assets/iconavataravatar28.png")}
        />
      </View>
      <View style={[styles.cardProduct1, styles.cardPosition1]}>
        <Image
          style={[styles.cardProductChild, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <Image
          style={[
            styles.pexelsPhoto247878Icon,
            styles.iconChildLayout,
            styles.transactionsPosition,
            styles.barsPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/pexelsphoto24787813.png")}
        />
        <Text style={styles.whiteFullSlive}>Endog</Text>
        <Text style={[styles.rahul, styles.textPosition, styles.homeClr]}>
          Tradly
        </Text>
        <Text style={[styles.text, styles.textClr, styles.textPosition]}>
          $25
        </Text>
        <Image
          style={styles.iconavataravatar2}
          resizeMode="cover"
          source={require("../assets/iconavataravatar28.png")}
        />
      </View>
      <Image
        style={[styles.cardProduct2, styles.cardPosition]}
        resizeMode="cover"
        source={require("../assets/card--product4.png")}
      />
      <Image
        style={[styles.cardProduct3, styles.cardPosition]}
        resizeMode="cover"
        source={require("../assets/card--product5.png")}
      />
      <Image
        style={[styles.cardProduct4, styles.cardPosition]}
        resizeMode="cover"
        source={require("../assets/card--product6.png")}
      />
      <Pressable
        style={[styles.iconuicartPosition1, styles.iconuilovePosition]}
        onPress={() => navigation.navigate("Wishlist")}
      >
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/iconuilove-21.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.iconuicart,
          styles.iconuicartPosition,
          styles.iconuicartPosition1,
          styles.iconChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconuicart2.png")}
      />
      <Image
        style={[
          styles.browseChild,
          styles.iconChildLayout,
          styles.transactionsPosition,
          styles.barsPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/group-427.png")}
      />
      <View
        style={[
          styles.barsNavigationWithSearch,
          styles.transactionsPosition,
          styles.barsPosition,
        ]}
      >
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle6.png")}
        />
        <Text style={[styles.tradly, styles.tradlyTypo]}>Pencarian</Text>
        <Text style={[styles.magnifierSimpleLineIcons, styles.tradlyTypo]}>
          
        </Text>
        <View
          style={[
            styles.barsStatusWhite1,
            styles.transactionsPosition,
            styles.barsPosition,
          ]}
        >
          <View style={[styles.action1, styles.actionPosition]}>
            <Text style={styles.time}>9:41</Text>
          </View>
          <Image
            style={[styles.containerIcon1, styles.containerIconPosition]}
            resizeMode="cover"
            source={require("../assets/container.png")}
          />
        </View>
        <TextInput
          style={styles.searchsearch2}
          placeholder="Cari Produk"
          keyboardType="default"
          placeholderTextColor="#4f4f4f"
        />
        <Image
          style={[styles.iconuicart1Layout, styles.iconuilovePosition]}
          resizeMode="cover"
          source={require("../assets/iconuilove-22.png")}
        />
        <Image
          style={[styles.iconuicart1Layout, styles.iconuicartPosition]}
          resizeMode="cover"
          source={require("../assets/iconuicart3.png")}
        />
      </View>
      <View style={[styles.barsTabs5Items, styles.barsTabs5ItemsLayout]}>
        <Text style={[styles.whiteFullSlive2, styles.whiteTypo]}>
          White Full Slive Top
        </Text>
        <Text style={[styles.whiteFullSlive3, styles.whiteTypo]}>
          White Full Slive Top
        </Text>
        <Image
          style={styles.barsTabs5ItemsLayout}
          resizeMode="cover"
          source={require("../assets/combined-shape2.png")}
        />
        <Image
          style={[
            styles.iphoneXhomeIndicatorhomeI,
            styles.rectangleIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/iphone-xhome-indicatorhome-indicator--on-light.png")}
        />
        <Text
          style={[
            styles.profile,
            styles.transactionsTypo,
            styles.homePosition,
            styles.homeClr,
          ]}
        >
          Product
        </Text>
        <View style={[styles.transactionsWrapper, styles.homePosition]}>
          <Text
            style={[
              styles.transactions,
              styles.transactionsTypo,
              styles.textClr,
              styles.transactionsPosition,
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
              styles.transactionsTypo,
              styles.homeClr,
              styles.transactionsPosition,
            ]}
          >
            Profile
          </Text>
        </View>
        <Text
          style={[
            styles.home,
            styles.transactionsTypo,
            styles.homePosition,
            styles.homeClr,
          ]}
        >
          Home
        </Text>
        <Pressable
          style={[styles.socialFeedWrapper, styles.socialFeedWrapperPosition]}
          onPress={() => navigation.navigate("OrderHistory")}
        >
          <Text
            style={[
              styles.transactions1,
              styles.transactionsTypo,
              styles.homeClr,
              styles.transactionsPosition,
            ]}
          >
            Order History
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.iconuihome,
            styles.icon1Common,
            styles.iconuihomePosition,
          ]}
          accessible="true"
          onPress={() => navigation.navigate("HomeDashboard")}
        >
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconPosition]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/jamhomef.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.iconuisearch,
            styles.iconuihomePosition,
            styles.iconChildLayout,
          ]}
          accessible="true"
          resizeMode="cover"
          source={require("../assets/iconuisearch2.png")}
        />
        <Image
          style={[
            styles.iconuistore,
            styles.icon1Common,
            styles.iconuihomePosition,
            styles.iconChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconuistore1.png")}
        />
        <Pressable
          style={[styles.iconuiorder, styles.iconuiorderLayout]}
          onPress={() => navigation.navigate("OrderHistory")}
        >
          <Image
            style={[styles.icon1, styles.icon1Common, styles.iconChildLayout]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/iconuiorder1.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.iconuiprofile,
            styles.icon1Common,
            styles.iconuiorderLayout,
            styles.iconChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconuiprofile1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsPosition: {
    left: "0%",
    width: "100%",
  },
  barsPosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  actionPosition: {
    height: 18,
    width: 54,
    left: 20,
    top: "50%",
    position: "absolute",
  },
  containerIconPosition: {
    height: 12,
    width: 67,
    right: 15,
    top: "50%",
    position: "absolute",
  },
  cardPosition1: {
    height: 200,
    left: "6.13%",
    right: "51.2%",
    width: "42.67%",
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  textPosition: {
    alignItems: "center",
    top: "85.93%",
    display: "none",
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_base,
    height: "6.53%",
    position: "absolute",
  },
  homeClr: {
    color: Color.neutralBlack1,
    fontWeight: "500",
  },
  textClr: {
    color: Color.brandGreen,
    textAlign: "center",
  },
  cardPosition: {
    left: "51.22%",
    right: "5.71%",
    height: 202,
    maxWidth: "100%",
    width: "43.08%",
    position: "absolute",
    overflow: "hidden",
  },
  iconuilovePosition: {
    right: "16.53%",
    left: "77.07%",
  },
  iconuicartPosition: {
    left: "88.27%",
    right: "5.33%",
  },
  iconuicartPosition1: {
    height: "2.3%",
    width: "6.4%",
    bottom: "92.03%",
    top: "5.66%",
    position: "absolute",
  },
  rectangleIconPosition: {
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  tradlyTypo: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    color: Color.neutralWhite1,
    position: "absolute",
  },
  barsTabs5ItemsLayout: {
    height: 87,
    width: 375,
  },
  whiteTypo: {
    fontSize: FontSize.size_sm,
    top: "34.48%",
    width: "32%",
    height: "17.24%",
    display: "none",
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.montserrat,
    fontWeight: "500",
    position: "absolute",
  },
  transactionsTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserrat,
    letterSpacing: 0,
    position: "absolute",
  },
  homePosition: {
    top: "47.13%",
    height: "13.79%",
  },
  socialFeedWrapperPosition: {
    bottom: "37.93%",
    top: "48.28%",
    height: "13.79%",
    position: "absolute",
  },
  icon1Common: {
    opacity: 0.4,
    overflow: "hidden",
  },
  iconuihomePosition: {
    bottom: "57.47%",
    top: "14.94%",
    height: "27.59%",
    width: "6.4%",
    position: "absolute",
  },
  iconuiorderLayout: {
    height: "27.59%",
    width: "6.4%",
    position: "absolute",
  },
  time: {
    marginTop: -9,
    left: 0,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    color: Color.neutralWhite1,
    letterSpacing: 0,
    fontWeight: "600",
    width: 54,
    top: "50%",
    position: "absolute",
  },
  action: {
    marginTop: -8.23,
  },
  containerIcon: {
    marginTop: -5.07,
  },
  barsStatusWhite: {
    height: "5.42%",
    bottom: "94.58%",
    top: "0%",
  },
  cardProductWithSale: {
    right: "51.04%",
    left: "5.88%",
    height: 202,
    maxWidth: "100%",
    width: "43.08%",
    top: 255,
    position: "absolute",
    overflow: "hidden",
  },
  cardProductChild: {
    height: "101%",
    width: "100.96%",
    top: "-0.5%",
    right: "-0.37%",
    bottom: "-0.5%",
    left: "-0.59%",
    borderRadius: Border.br_sm,
    position: "absolute",
    overflow: "hidden",
  },
  pexelsPhoto247878Icon: {
    height: "63.71%",
    bottom: "36.29%",
    top: "0%",
    overflow: "hidden",
  },
  whiteFullSlive: {
    width: "88.63%",
    top: "69.85%",
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.montserrat,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: "7.44%",
    height: "6.53%",
    position: "absolute",
  },
  rahul: {
    width: "34.71%",
    left: "23.55%",
    opacity: 0.5,
    textAlign: "left",
  },
  text: {
    width: "21.07%",
    left: "74.99%",
    justifyContent: "center",
    fontWeight: "600",
    color: Color.brandGreen,
    top: "85.93%",
  },
  iconavataravatar2: {
    height: "10.05%",
    width: "12.4%",
    top: "84.42%",
    right: "80.17%",
    bottom: "5.53%",
    display: "none",
    left: "7.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardProduct: {
    top: 466,
  },
  cardProduct1: {
    top: 676,
  },
  cardProduct2: {
    top: 255,
    left: "51.22%",
    right: "5.71%",
  },
  cardProduct3: {
    top: 465,
  },
  cardProduct4: {
    top: 675,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconuicart: {
    overflow: "hidden",
  },
  browseChild: {
    height: "5.37%",
    top: "17.58%",
    bottom: "77.04%",
    overflow: "hidden",
  },
  rectangleIcon: {
    height: "100%",
    top: "0%",
  },
  tradly: {
    width: "88%",
    top: "32.94%",
    left: "4.27%",
    fontWeight: "700",
  },
  magnifierSimpleLineIcons: {
    height: "24.54%",
    width: "4%",
    top: "49.92%",
    left: "61.07%",
  },
  action1: {
    marginTop: -8,
  },
  containerIcon1: {
    marginTop: -4.84,
  },
  barsStatusWhite1: {
    height: "25.88%",
    bottom: "74.12%",
    top: "0%",
  },
  searchsearch2: {
    height: "27.06%",
    width: "89.33%",
    top: "63.53%",
    bottom: "9.41%",
    left: "5.33%",
    right: "5.33%",
    position: "absolute",
    overflow: "hidden",
  },
  iconuicart1Layout: {
    bottom: "51.18%",
    top: "34.71%",
    height: "14.12%",
    width: "6.4%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barsNavigationWithSearch: {
    top: 0,
    height: 170,
  },
  whiteFullSlive2: {
    left: "5.33%",
  },
  whiteFullSlive3: {
    left: "52.27%",
  },
  iphoneXhomeIndicatorhomeI: {
    height: "39.08%",
    top: "60.92%",
    opacity: 0.12,
  },
  profile: {
    width: "14.67%",
    left: "42.67%",
    textAlign: "center",
  },
  transactions: {
    fontWeight: "700",
    height: "100%",
    top: "0%",
  },
  transactionsWrapper: {
    width: "19.47%",
    right: "62.4%",
    bottom: "39.08%",
    left: "18.13%",
    position: "absolute",
  },
  transactions1: {
    height: "100%",
    textAlign: "center",
    top: "0%",
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
    textAlign: "left",
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
    right: "68.8%",
    left: "24.8%",
    overflow: "hidden",
  },
  iconuistore: {
    right: "46.67%",
    left: "46.93%",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  iconuiorder: {
    left: "67.73%",
    top: "16.09%",
    right: "25.87%",
    bottom: "56.32%",
  },
  iconuiprofile: {
    top: "13.79%",
    right: "5.87%",
    bottom: "58.62%",
    left: "87.73%",
  },
  barsTabs5Items: {
    bottom: 0,
    left: 12,
    position: "absolute",
    overflow: "hidden",
  },
  browse: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 968,
    overflow: "hidden",
    width: "100%",
  },
});

export default Browse;
