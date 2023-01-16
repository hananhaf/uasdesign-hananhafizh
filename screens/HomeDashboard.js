import * as React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const HomeDashboard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.homeDashboard}
      contentContainerStyle={styles.homeDashboardScrollViewContent}
    >
      <View style={styles.barsNavigationWithSearch}>
        <Image
          style={[styles.rectangleIcon, styles.iconLayout, styles.backPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Text style={[styles.tradly, styles.textTypo1]}>UDB Veggie Mart</Text>
        <Text style={[styles.magnifierSimpleLineIcons, styles.textTypo1]}>
          
        </Text>
        <View style={styles.barsStatusWhite}>
          <View style={[styles.action, styles.timePosition]}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
          <Image
            style={styles.containerIcon}
            resizeMode="cover"
            source={require("../assets/container.png")}
          />
        </View>
        <Pressable
          style={[styles.searchsearch2, styles.iconuicartPosition1]}
          accessible="true"
          onPress={() => navigation.navigate("Browse")}
        >
          <View style={[styles.back, styles.backPosition]}>
            <View style={styles.rectangle} />
          </View>
          <Image
            style={styles.iconuisearch}
            resizeMode="cover"
            source={require("../assets/iconuisearch.png")}
          />
          <Text style={[styles.tradly1, styles.tradly1Typo, styles.textTypo1]}>
            Search Product
          </Text>
        </Pressable>
        <Pressable
          style={[styles.iconuilove2, styles.iconuicartPosition]}
          onPress={() => navigation.navigate("Wishlist")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/iconuilove-2.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.iconuicart,
            styles.iconuicartPosition,
            styles.iconuicartPosition1,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconuicart.png")}
        />
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.frameChild, styles.cardPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <LinearGradient
          style={[styles.rectangle1, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["#2bdbc0", "#13b58c"]}
        >
          <ImageBackground
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/rectangle2.png")}
          />
        </LinearGradient>
        <ImageBackground
          style={[styles.rectangleIcon1, styles.rectanglePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle3.png")}
        />
        <Text style={[styles.fashionableHats, styles.fashionableHatsTypo]}>
          <Text style={styles.siapAntarKerumah}>Siap Antar Kerumah</Text>
          <Text style={styles.anda}>Anda</Text>
        </Text>
        <Text style={[styles.getPromocodeCopy, styles.fashionableHatsTypo]}>
          Mulai belanja
        </Text>
      </View>
      <Text style={[styles.brandsToFollow, styles.brandsTypo]}>
        Produk Kami
      </Text>
      <Image
        style={styles.cardmenuwithImageIcon}
        resizeMode="cover"
        source={require("../assets/cardmenuwith-image.png")}
      />
      <View style={styles.rectangle5Copy2} />
      <Text style={[styles.brandsToFollow, styles.brandsTypo]}>
        Produk Baru
      </Text>
      <Image
        style={[styles.buttonfollowLayout, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/buttonfollow.png")}
      />
      <ScrollView
        style={styles.cardProductWithSaleParent}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.cardProductWithSale, styles.cardLayout]}>
          <View style={[styles.cardProductWithSaleChild, styles.cardBorder]} />
          <Image
            style={[styles.pexelsPhoto247878Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pexelsphoto247878.png")}
          />
          <Text style={[styles.whiteFullSlive, styles.whiteTypo1]}>
            Coca Cola
          </Text>
          <Text style={[styles.rahul, styles.rahulFlexBox, styles.homeFlexBox]}>
            Rp
          </Text>
          <Text style={[styles.text, styles.textTypo1]}>5000</Text>
          <Text style={[styles.text1, styles.textFlexBox, styles.homeTypo]} />
          <Image
            style={[styles.iconavataravatar2, styles.iconavataravatarPosition1]}
            resizeMode="cover"
            source={require("../assets/iconavataravatar2.png")}
          />
        </View>
        <View
          style={[styles.cardProductWithSale, styles.ml10, styles.cardLayout]}
        >
          <View style={[styles.cardProductWithSaleChild, styles.cardBorder]} />
          <Image
            style={[styles.pexelsPhoto247878Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pexelsphoto2478781.png")}
          />
          <Text style={[styles.whiteFullSlive, styles.whiteTypo1]}>
            Brocolli
          </Text>
          <Text style={[styles.rahul, styles.rahulFlexBox, styles.homeFlexBox]}>
            Rp
          </Text>
          <Text style={[styles.text2, styles.textTypo, styles.textFlexBox]}>
            1500
          </Text>
          <Image
            style={[styles.iconavataravatar2, styles.iconavataravatarPosition1]}
            resizeMode="cover"
            source={require("../assets/iconavataravatar2.png")}
          />
        </View>
        <View style={[styles.cardProductWithSale1, styles.ml10]}>
          <View style={[styles.cardProductWithSaleItem, styles.cardBorder]} />
          <Image
            style={[styles.pexelsPhoto247878Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pexelsphoto2478782.png")}
          />
          <Text style={[styles.whiteFullSlive, styles.whiteTypo1]}>
            Coca Cola
          </Text>
          <Text style={[styles.rahul, styles.rahulFlexBox, styles.homeFlexBox]}>
            Rp
          </Text>
          <Text style={[styles.text3, styles.textTypo1]}>5000</Text>
          <Text style={[styles.text1, styles.textFlexBox, styles.homeTypo]} />
          <Image
            style={styles.iconavataravatarPosition1}
            resizeMode="cover"
            source={require("../assets/iconavataravatar22.png")}
          />
        </View>
      </ScrollView>
      <Text style={[styles.brandsToFollow, styles.brandsTypo]}>
        Produk Terlaris
      </Text>
      <Image
        style={styles.iconLayout}
        resizeMode="cover"
        source={require("../assets/buttonfollow.png")}
      />
      <ScrollView
        style={styles.cardProductWithSaleParent}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollView1Content}
      >
        <View style={[styles.cardProductWithSale, styles.cardLayout]}>
          <View style={[styles.cardProductWithSaleChild, styles.cardBorder]} />
          <Image
            style={[styles.pexelsPhoto247878Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pexelsphoto2478783.png")}
          />
          <Text style={[styles.whiteFullSlive, styles.whiteTypo1]}>
            Ikan Segar
          </Text>
          <Text style={[styles.rahul, styles.rahulFlexBox, styles.homeFlexBox]}>
            Rp
          </Text>
          <Text style={[styles.text5, styles.textTypo1]}>25000</Text>
          <Image
            style={[styles.iconavataravatar2, styles.iconavataravatarPosition1]}
            resizeMode="cover"
            source={require("../assets/iconavataravatar2.png")}
          />
        </View>
        <ScrollView
          style={[styles.cardProductWithSaleParent, styles.ml10]}
          horizontal
        />
        <View
          style={[styles.cardProductWithSale, styles.ml10, styles.cardLayout]}
        >
          <View style={[styles.cardProductWithSaleChild, styles.cardBorder]} />
          <Image
            style={[styles.pexelsPhoto247878Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pexelsphoto2478784.png")}
          />
          <Text style={[styles.whiteFullSlive, styles.whiteTypo1]}>
            Shampoo
          </Text>
          <Text style={[styles.rahul, styles.rahulFlexBox, styles.homeFlexBox]}>
            Rp
          </Text>
          <Text style={[styles.text5, styles.textTypo1]}>10000</Text>
          <Image
            style={[styles.iconavataravatar2, styles.iconavataravatarPosition1]}
            resizeMode="cover"
            source={require("../assets/iconavataravatar24.png")}
          />
        </View>
        <View style={[styles.cardProductWithSale2, styles.ml10]}>
          <View style={[styles.cardProductWithSaleInner, styles.cardBorder]} />
          <Image
            style={[styles.pexelsPhoto247878Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pexelsphoto2478785.png")}
          />
          <Text style={[styles.whiteFullSlive, styles.whiteTypo1]}>
            Coca Cola
          </Text>
          <Text style={[styles.rahul, styles.rahulFlexBox, styles.homeFlexBox]}>
            Rp
          </Text>
          <Text style={[styles.text7, styles.textTypo]}>7500</Text>
          <Text style={[styles.text1, styles.textFlexBox, styles.homeTypo]} />
          <Image
            style={[styles.iconavataravatar2, styles.iconavataravatarPosition1]}
            resizeMode="cover"
            source={require("../assets/iconavataravatar25.png")}
          />
        </View>
      </ScrollView>
      <Text style={[styles.brandsToFollow3, styles.brandsTypo]}>
        Store Lainnya
      </Text>
      <Image
        style={styles.iconLayout}
        resizeMode="cover"
        source={require("../assets/buttonfollow2.png")}
      />
      <ScrollView
        style={styles.cardProductWithSaleParent}
        horizontal
        contentContainerStyle={styles.frameScrollView3Content}
      >
        <View style={styles.cardStoreToFollowParent}>
          <View
            style={[
              styles.cardStoreToFollow,
              styles.cardLayout,
              styles.cardPosition,
            ]}
          >
            <View
              style={[styles.cardProductWithSaleChild, styles.cardBorder]}
            />
            <Image
              style={[styles.pexelsPhoto247878Icon6, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/pexelsphoto2478786.png")}
            />
            <Text style={[styles.whiteFullSlive6, styles.whiteTypo1]}>
              Tokodepia
            </Text>
            <Image
              style={[
                styles.iconavataravatar26,
                styles.iconavataravatarPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/iconavataravatar26.png")}
            />
            <View
              style={[
                styles.buttonfollow,
                styles.rahulFlexBox,
                styles.buttonfollowLayout,
              ]}
            >
              <Text style={styles.rahul6}>Follow</Text>
            </View>
          </View>
          <View
            style={[
              styles.cardStoreToFollow1,
              styles.cardLayout,
              styles.cardPosition,
            ]}
          >
            <View
              style={[styles.cardProductWithSaleChild, styles.cardBorder]}
            />
            <Image
              style={[styles.pexelsPhoto247878Icon6, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/pexelsphoto2478787.png")}
            />
            <Text style={[styles.whiteFullSlive6, styles.whiteTypo1]}>
              Alfathmart
            </Text>
            <Image
              style={[
                styles.iconavataravatar26,
                styles.iconavataravatarPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/iconavataravatar1.png")}
            />
            <View
              style={[
                styles.buttonfollow,
                styles.rahulFlexBox,
                styles.buttonfollowLayout,
              ]}
            >
              <Text style={styles.rahul6}>Follow</Text>
            </View>
          </View>
          <View
            style={[
              styles.cardStoreToFollow2,
              styles.cardLayout,
              styles.cardPosition,
            ]}
          >
            <View
              style={[styles.cardProductWithSaleChild, styles.cardBorder]}
            />
            <Image
              style={[styles.pexelsPhoto247878Icon6, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/pexelsphoto2478788.png")}
            />
            <Text style={[styles.whiteFullSlive6, styles.whiteTypo1]}>
              Toko Bu Jamal Store
            </Text>
            <Image
              style={[
                styles.iconavataravatar27,
                styles.iconavataravatarPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/iconavataravatar27.png")}
            />
            <View
              style={[
                styles.buttonfollow,
                styles.rahulFlexBox,
                styles.buttonfollowLayout,
              ]}
            >
              <Text style={styles.rahul6}>Follow</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: Margin.m_md,
  },
  frameScrollViewContent: {
    flexDirection: "row",
  },
  frameScrollView1Content: {
    flexDirection: "row",
  },
  frameScrollView3Content: {
    flexDirection: "column",
  },
  homeDashboardScrollViewContent: {
    flexDirection: "column",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  backPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo1: {
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  iconuicartPosition1: {
    right: "5.33%",
    overflow: "hidden",
  },
  tradly1Typo: {
    fontWeight: "500",
    color: Color.neutralBlack1,
  },
  iconuicartPosition: {
    height: "14.12%",
    width: "6.4%",
    bottom: "51.18%",
    top: "34.71%",
    position: "absolute",
  },
  cardPosition: {
    top: 0,
    position: "absolute",
  },
  rectanglePosition: {
    height: 177,
    top: 22,
    position: "absolute",
  },
  fashionableHatsTypo: {
    textTransform: "uppercase",
    letterSpacing: 1,
    color: Color.neutralWhite1,
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  brandsTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    fontWeight: "700",
  },
  cardLayout: {
    width: 160,
    height: 200,
  },
  cardBorder: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_sm,
    bottom: "-0.5%",
    top: "-0.5%",
    height: "101%",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.neutralWhite1,
    position: "absolute",
  },
  whiteTypo1: {
    color: Color.gray_400,
    width: "88.63%",
    height: "6.53%",
    fontWeight: "500",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  rahulFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  homeFlexBox: {
    display: "flex",
    textAlign: "left",
  },
  textFlexBox: {
    justifyContent: "center",
    width: "21.07%",
    alignItems: "center",
    display: "flex",
    height: "6.53%",
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserrat,
  },
  iconavataravatarPosition1: {
    bottom: "5.53%",
    right: "80.17%",
    top: "84.42%",
    width: "12.4%",
    height: "10.05%",
    left: "7.44%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  textTypo: {
    left: "74.99%",
    color: Color.brandGreen,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  iconavataravatarPosition: {
    left: "29.69%",
    bottom: "41.25%",
    top: "26.25%",
    height: "32.5%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  buttonfollowLayout: {
    borderRadius: Border.br_md,
    overflow: "hidden",
  },
  whiteTypo: {
    top: "34.48%",
    width: "32%",
    height: "17.24%",
    fontSize: FontSize.size_sm,
    color: Color.gray_400,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  homePosition: {
    top: "47.13%",
    height: "13.79%",
    position: "absolute",
  },
  socialFeedWrapperPosition: {
    bottom: "37.93%",
    top: "48.28%",
    height: "13.79%",
    position: "absolute",
  },
  iconuihomePosition: {
    bottom: "57.47%",
    top: "14.94%",
    height: "27.59%",
    width: "6.4%",
    position: "absolute",
  },
  icon2Common: {
    opacity: 0.4,
    overflow: "hidden",
  },
  iconuiorderLayout: {
    height: "27.59%",
    opacity: 0.4,
    width: "6.4%",
    position: "absolute",
  },
  rectangleIcon: {
    overflow: "hidden",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  tradly: {
    width: "88%",
    top: "32.94%",
    left: "4.27%",
    textAlign: "left",
    color: Color.neutralWhite1,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
  },
  magnifierSimpleLineIcons: {
    height: "24.54%",
    width: "4%",
    top: "49.92%",
    left: "61.07%",
    textAlign: "left",
    color: Color.neutralWhite1,
    fontSize: FontSize.size_4xl,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    color: Color.neutralWhite1,
  },
  action: {
    marginTop: -7.96,
    left: 20,
    height: 18,
  },
  containerIcon: {
    marginTop: -4.8,
    right: 15,
    width: 67,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  barsStatusWhite: {
    height: "25.88%",
    bottom: "74.12%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangle: {
    borderRadius: 23,
    shadowColor: "rgba(58, 76, 130, 0.07)",
    shadowOffset: {
      width: 0,
      height: 19,
    },
    shadowRadius: 38,
    elevation: 38,
    shadowOpacity: 1,
    backgroundColor: Color.neutralWhite1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  back: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  iconuisearch: {
    top: 11,
    left: 18,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  tradly1: {
    top: "30.43%",
    left: "19.1%",
    opacity: 0.2,
    color: Color.neutralBlack1,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  searchsearch2: {
    height: "27.06%",
    width: "89.33%",
    top: "63.53%",
    bottom: "9.41%",
    left: "5.33%",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  iconuilove2: {
    left: "77.07%",
    right: "16.53%",
  },
  iconuicart: {
    left: "88.27%",
  },
  barsNavigationWithSearch: {
    height: 162,
    width: 412,
  },
  frameChild: {
    left: 191,
    width: 14,
    height: 14,
  },
  icon1: {
    borderTopLeftRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
  },
  rectangle1: {
    left: "51.83%",
    width: "48.17%",
    right: "0%",
  },
  rectangleIcon1: {
    width: "52.53%",
    right: "47.47%",
    borderRadius: Border.br_xs,
    left: "0%",
  },
  siapAntarKerumah: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  anda: {
    margin: Margin.m_sm,
  },
  fashionableHats: {
    width: "32.91%",
    top: 132,
    left: "52.83%",
    lineHeight: 16,
    height: 52,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textAlign: "left",
  },
  getPromocodeCopy: {
    width: "31.37%",
    top: 86,
    left: "10.38%",
    lineHeight: 21,
    height: 55,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
  },
  ellipseParent: {
    width: 573,
    height: 199,
  },
  brandsToFollow: {
    color: Color.neutralBlack1,
  },
  cardmenuwithImageIcon: {
    width: 411,
    height: 187,
  },
  rectangle5Copy2: {
    borderRadius: 14,
    borderColor: "#fff",
    width: 121,
    height: 28,
    borderWidth: 1,
    borderStyle: "solid",
  },
  cardProductWithSaleChild: {
    width: "101.03%",
    right: "-0.41%",
    left: "-0.62%",
  },
  pexelsPhoto247878Icon: {
    height: "63.71%",
    bottom: "36.29%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  whiteFullSlive: {
    top: "69.85%",
    left: "7.44%",
    color: Color.gray_400,
    width: "88.63%",
    textAlign: "left",
  },
  rahul: {
    width: "34.71%",
    left: "23.55%",
    opacity: 0.5,
    top: "85.93%",
    height: "6.53%",
    alignItems: "center",
    display: "flex",
    color: Color.neutralBlack1,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
  },
  text: {
    left: "73.74%",
    color: Color.brandGreen,
    top: "84.93%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontWeight: "600",
  },
  text1: {
    top: "86.43%",
    left: "57.64%",
    textDecoration: "line-through",
    color: Color.neutralBlack1,
    textAlign: "center",
    position: "absolute",
  },
  iconavataravatar2: {
    display: "none",
  },
  cardProductWithSale: {
    height: 200,
  },
  text2: {
    top: "85.93%",
  },
  cardProductWithSaleItem: {
    width: "100.98%",
    right: "-0.38%",
    left: "-0.6%",
  },
  text3: {
    left: "74.39%",
    color: Color.brandGreen,
    top: "84.93%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontWeight: "600",
  },
  cardProductWithSale1: {
    width: 167,
    height: 200,
  },
  cardProductWithSaleParent: {
    width: "100%",
  },
  text5: {
    left: "71.24%",
    color: Color.brandGreen,
    top: "84.93%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontWeight: "600",
  },
  cardProductWithSaleInner: {
    width: "100.93%",
    right: "-0.36%",
    left: "-0.57%",
  },
  text7: {
    top: "84.93%",
  },
  cardProductWithSale2: {
    width: 174,
    height: 200,
    overflow: "hidden",
  },
  brandsToFollow3: {
    color: "#111",
  },
  pexelsPhoto247878Icon6: {
    height: "42.5%",
    bottom: "57.5%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  whiteFullSlive6: {
    top: "62%",
    left: "5.63%",
    color: Color.gray_400,
    width: "88.63%",
    textAlign: "center",
  },
  iconavataravatar26: {
    width: "40.63%",
    right: "29.69%",
  },
  rahul6: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "center",
    color: Color.neutralWhite1,
    fontFamily: FontFamily.montserrat,
  },
  buttonfollow: {
    height: "11.5%",
    width: "53.75%",
    top: "79%",
    right: "23.13%",
    bottom: "9.5%",
    left: "23.13%",
    backgroundColor: Color.brandGreen,
    flexDirection: "row",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_sm,
  },
  cardStoreToFollow: {
    height: 200,
    left: 0,
  },
  cardStoreToFollow1: {
    left: 170,
    height: 200,
  },
  iconavataravatar27: {
    width: "40%",
    right: "30.31%",
  },
  cardStoreToFollow2: {
    left: 340,
    height: 200,
  },
  cardStoreToFollowParent: {
    width: 500,
    height: 200,
  },
  homeDashboard: {
    backgroundColor: Color.gray_100,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default HomeDashboard;
