import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'components';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  tab: {
    alignItems: 'center',
    flexGrow: 1,
  },
});

const tabs = [
  {
    name: 'Wishlist',
    value: '2',
  },
  {
    name: 'Following',
    value: '24',
    route: 'Social',
  },
  {
    name: 'Voucher',
    value: '0',
  },
];

const MetaTab = ({ navigation }) => (
  <View style={styles.container}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab.name}
        style={styles.tab}
        onPress={tab.route ? () => navigation.navigate(tab.route) : null}
      >
        <Text color="white" weight="medium" font="p1">{tab.value}</Text>
        <Text color="white">{tab.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

MetaTab.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MetaTab;
