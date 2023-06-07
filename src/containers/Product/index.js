import React, { useState } from "react";
import {
  Text,
  NavBar,
  Container,
  Carousel,
  Rating,
  Discount,
  IconButton,
} from "components";
import { ScrollView, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { getScreenHeight } from "utils/size";
import { scale } from "react-native-size-matters";
import Colors from "themes/colors";
import { getRandomShop } from "mocks/shops";
import Footer from "./Footer";
import Details from "./Details";
import Shop from "./Shop";
import Option from "./Option";
import ReviewList from "./Review/ReviewList";

const shop = getRandomShop();

const Product = ({ navigation, route }) => {
  const { product } = route.params;
  const [variant, setVariant] = useState("ghost");
  const onScroll = (y) => {
    setVariant(y > getScreenHeight() / 2 ? "gradient" : "ghost");
  };

  return (
    <Container>
      <ScrollView
        onScroll={({
          nativeEvent: {
            contentOffset: { y },
          },
        }) => onScroll(y)}
        scrollEventThrottle={16}
      >
        <Carousel
          style={styles.carousel}
          images={product.images}
          autoplay={false}
        />
        <View style={styles.card}>
          <Text font="p1" weight="medium">
            {product.name}
          </Text>
          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <Text font="h2" weight="medium" color="tertiary">
                {product.price}
              </Text>
              {product.beforeDiscount && (
                <Text font="p1" style={styles.discount} color="gray50">
                  {product.beforeDiscount}
                </Text>
              )}
            </View>
            <Discount discount="10%" />
          </View>
          <View style={styles.rating}>
            <Rating rating={product.rating} />
            <Text>{`${product.sold} sold`}</Text>
          </View>
        </View>
        <Option product={product} />
        <Shop navigation={navigation} shop={shop} />
        <Details />
        <View style={styles.card}>
          <ReviewList navigation={navigation} />
        </View>
      </ScrollView>
      <NavBar
        onLeftIconPress={() => navigation.goBack()}
        containerStyle={styles.navbar}
        title={variant !== "ghost" ? product.name : null}
        variant={variant}
        renderRightComponent={() => (
          <View style={styles.control}>
            <IconButton icon="heart" color="white" style={styles.icon} />
            <IconButton
              icon="more-horizontal"
              color="white"
              style={styles.icon}
            />
          </View>
        )}
      />
      <Footer navigation={navigation} shop={shop} />
    </Container>
  );
};

Product.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    height: getScreenHeight() / 2,
    resizeMode: "contain",
  },
  discount: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    marginTop: scale(14),
  },
  card: {
    padding: scale(14),
    marginBottom: scale(14),
    backgroundColor: Colors.white,
  },
  rating: {
    marginTop: scale(14),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  control: {
    flexDirection: "row",
  },
  icon: {
    paddingLeft: scale(14),
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
export default Product;
