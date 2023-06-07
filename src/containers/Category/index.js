import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, StyleSheet, View } from "react-native";
import { Container, NavBar, ProductList } from "components";
import { scale } from "react-native-size-matters";
import Colors from "themes/colors";
import Controls from "./Controls";
import Filter from "./Filter";

const Category = ({ navigation, route }) => {
  const { title } = route.params;
  const [display, setDisplay] = useState("grid");
  return (
    <Container backgroundColor="primary" asGradient>
      <NavBar
        title={title}
        onLeftIconPress={() => navigation.goBack()}
        renderRightComponent={() => <Filter />}
      />
      <View style={styles.container}>
        <Controls onDisplayChange={setDisplay} />
        <ScrollView>
          <ProductList navigation={navigation} variant={display} />
        </ScrollView>
      </View>
    </Container>
  );
};

Category.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  controls: {
    flexDirection: "row",
    paddingHorizontal: scale(14),
    justifyContent: "space-between",
    paddingVertical: scale(14),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray25,
  },
  divider: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray25,
  },
  filter: {
    marginLeft: scale(5),
  },
});

export default Category;
