import React from "react";
import { getNProducts } from "mocks/products";
import { View, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import PropTypes from "prop-types";
import Colors from "themes/colors";
import isEmpty from "lodash/isEmpty";
import BasicTile from "./BasicTile";
import ListTile from "./ListTile";
import Text from "../Text";

const ProductList = ({
  title,
  numberOfProducts,
  navigation,
  variant,
  products,
  HotItems,
}) => {
  const productsList = isEmpty(HotItems)
    ? products
    : getNProducts(numberOfProducts);
  // const productsList = HotItems;
  // getNProducts(numberOfProducts)
  const Tile = variant === "grid" ? BasicTile : ListTile;

  return (
    <View>
      {title && (
        <View style={styles.header}>
          <View style={styles.divider} />
          <Text weight="medium" color="gray75" centered style={styles.title}>
            {title}
          </Text>
          <View style={styles.divider} />
        </View>
      )}
      <View
        style={StyleSheet.flatten([
          styles.container,
          { flexDirection: variant === "grid" ? "row" : "column" },
          { flexWrap: variant === "grid" ? "wrap" : "nowrap" },
        ])}
      >
        {productsList.map((product, index) => (
          <Tile
            onPress={() => navigation.navigate("Product", { product })}
            key={product.id}
            style={index % 2 === 0 ? styles.right : styles.left}
            {...product}
          />
        ))}
      </View>
    </View>
  );
};

ProductList.propTypes = {
  navigation: PropTypes.object.isRequired,
  numberOfProducts: PropTypes.number,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["list", "grid"]),
  products: PropTypes.array,
};

ProductList.defaultProps = {
  numberOfProducts: 10,
  title: null,
  variant: "grid",
  products: [],
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: scale(14),
    paddingVertical: scale(10),
  },
  left: {
    marginLeft: scale(7),
  },
  right: {
    marginRight: scale(7),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginTop: scale(20),
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray50,
    flex: 1,
    marginTop: scale(20),
    marginHorizontal: scale(14),
  },
});

export default ProductList;
