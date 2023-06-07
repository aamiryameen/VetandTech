import React from "react";
import { ProductList } from "components";
import PropTypes from "prop-types";

const DailyDiscover = ({ navigation, HotItems }) => (
  <ProductList
    navigation={navigation}
    title="Daily Discover"
    HotItems={HotItems}
  />
);

DailyDiscover.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DailyDiscover;
