import React from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import GradientBlock from "../../../components/Gradient/Block";
import PropTypes from "prop-types";
import { getScreenWidth } from "utils/size";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "components";
import Colors from "themes/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import fonts from "../../../themes/fonts";

const Categories = ({ categories, navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Icon
        name="category"
        size={scale(20)}
        color={Colors.white}
        style={{ marginRight: scale(10), marginHorizontal: scale(10) }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          // marginHorizontal: scale(15),
          weight: "bold",
        }}
      >
        Categories
      </Text>
    </View>
    {categories.map((category) => (
      <TouchableOpacity
        key={category.id}
        onPress={() =>
          navigation.navigate("Category", { title: category.name })
        }
      >
        <View style={styles.button}>
          <Image
            source={{ uri: category.image }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text color="gray75" numberOfLines={1}>
            {category.name}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,

    paddingVertical: verticalScale(10),
    backgroundColor: "#FFFFFF",

    // width: "%",
    alignSelf: "center",
  },
  button: {
    width: getScreenWidth() / 3,
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: scale(60),
    height: scale(60),
    flex: 1,
  },
  header: {
    height: 40,
    width: "100%",
    backgroundColor: Colors.primary,
    // justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "center",
    // alignItems:'center'
  },
});

export default Categories;
