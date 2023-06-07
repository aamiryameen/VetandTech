import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "components";
import Colors from "themes/colors";
import PropTypes from "prop-types";
import { scale } from "react-native-size-matters";



const items = [
  "Needle Holders",
  "Elevators",
  "Anesthesia",
  "Bone Files",
  "Dog Food",
];

const Popular = ({ navigation }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {items.map((item) => (
      <TouchableOpacity
        style={styles.pill}
        key={item}
        onPress={() => navigation.navigate("Category", { title: item })}
      >
        <Text color="white">{item}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

Popular.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {},
  pill: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(2),
    backgroundColor: Colors.primary,
    borderRadius: scale(20),
    marginLeft: scale(5),
  },
});
export default Popular;
