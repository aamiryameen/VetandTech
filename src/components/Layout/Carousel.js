import React from "react";
import { StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { verticalScale } from "react-native-size-matters";
import Colors from "themes/colors";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  wrapper: {
    height: verticalScale(150),
  },
  slide: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

const Carousel = ({ style, images, ...otherProps }) => {
  // console.log('images',images)
  return (
    <Swiper
      style={StyleSheet.flatten([styles.wrapper, style])}
      autoplay={true}
      // key={id}
      // showsButtons={false}
      autoplayTimeout={2.5}
      showsButtons={false}
      activeDotColor={Colors.primary}
      dotColor={Colors.gray50}
      {...otherProps}
    >
      {images.map((image) => (
        <Image
          key={image}
          source={{ uri: image }}
          resizeMode="stretch"
          style={styles.slide}
        />
      ))}
    </Swiper>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  style: PropTypes.any,
};

Carousel.defaultProps = {
  style: null,
};

export default Carousel;
