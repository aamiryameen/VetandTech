import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, GradientIcon, Card } from 'components';
import { scale, verticalScale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: scale(10),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.gray10,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    width: scale(60),
    height: verticalScale(60),
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const controls = [
  {
    name: 'To Pay',
    icon: 'wallet',
  },
  {
    name: 'To Ship',
    icon: 'package',
  },
  {
    name: 'To Receive',
    icon: 'truck',
  },
  {
    name: 'To Review',
    icon: 'comment-processing',
  },
];

const MyOrders = ({ navigation }) => (
  <Card>
    <View style={styles.header}>
      <Text weight="medium" flex>My Orders</Text>
      <TouchableOpacity style={styles.viewAll} onPress={() => navigation.navigate('Orders', { selectedTab: 0 })}>
        <Text font="h5" color="gray50">View all</Text>
        <Icon
          name="chevron-right"
          color={Colors.gray50}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      {controls.map((control, index) => (
        <TouchableOpacity
          style={styles.tab}
          key={control.name}
          onPress={() => navigation.navigate('Orders', { selectedTab: index + 1 })}
        >
          <GradientIcon icon={control.icon} size={24} />
          <Text
            color="gray75"
            style={{ marginTop: verticalScale(5) }}
          >
            {control.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </Card>
);

MyOrders.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyOrders;
