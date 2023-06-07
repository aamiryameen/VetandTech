import React from "react";
import { Text, GradientBlock, SmallTile } from "components";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { getNProducts } from "mocks/products";
import { scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather";
import Colors from "themes/colors";
import PropTypes from "prop-types";

const FlashSale = ({ HotItems, navigation }) => {
  // console.log(HotItems);
  return (
    <GradientBlock>
      <View style={styles.header}>
        <View style={styles.flash}>
          <Icon
            name="zap"
            size={scale(20)}
            color={Colors.white}
            style={styles.icon}
          />
          <Text weight="medium" font="h2" color="white">
            Hot Sale Items
          </Text>
        </View>
        {/* <TouchableOpacity>
          <Text color="white">View all</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        {HotItems.map((product, index) => {
          const producttype = () => {
            if (product.type == "simple") {
              return product.price;
            } else {
              return (
                <View style={styles.typebox}>
                  <Text
                    style={{
                      color: Colors.primary,
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    See Details
                  </Text>
                </View>
              );
            }
          };

          return (
            <SmallTile
              key={product.id}
              style={StyleSheet.flatten([
                { marginRight: scale(7) },
                index === 0 && { marginLeft: scale(14) },
                index === 7 && { marginRight: scale(14) },
              ])}
              {...product}
              label={producttype()}
              onPress={() =>
                navigation.navigate("Category", {
                  title: `From ${product.price}`,
                })
              }
            />
          );
        })}
      </ScrollView>
    </GradientBlock>
  );
};

FlashSale.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: scale(14),
    paddingHorizontal: scale(14),
    justifyContent: "space-between",
  },
  icon: {
    marginRight: scale(10),
  },
  flash: {
    alignItems: "center",
    flexDirection: "row",
  },
  products: {
    paddingVertical: scale(14),
  },
  typebox: {
    justifyContent: "flex-end",
    alignItems: "center",
    // borderRadius: 5,
  },
});
export default FlashSale;
