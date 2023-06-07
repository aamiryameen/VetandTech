import React from 'react';
import {
  SafeAreaView, View, StyleSheet,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import {
  IconButton, Button,
} from 'components';
import Colors from 'themes/colors';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: Colors.white,
  },
  leftContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContianer: {
    flex: 1,
  },
  icon: {
    marginRight: scale(20),
  },
});

const Footer = ({ navigation, shop }) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <IconButton
          icon="home"
          size={scale(16)}
          text="SHOP"
          color="tertiary"
          style={styles.icon}
          onPress={() => navigation.navigate('Shop', { id: shop.id })}
        />
        <IconButton
          icon="message-circle"
          size={scale(16)}
          text="CHAT"
          color="gray50"
          style={styles.icon}
          onPress={() => navigation.navigate('ChatRoom', { id: shop.id })}
        />
        <IconButton
          icon="heart"
          size={scale(16)}
          text="SAVE"
          color="gray50"
          style={styles.icon}
        />
      </View>
      <View style={styles.rightContianer}>
        <Button label="Add to Cart" />
      </View>
    </View>
  </SafeAreaView>
);

Footer.propTypes = {
  navigation: PropTypes.object.isRequired,
  shop: PropTypes.object.isRequired,
};

export default Footer;
