import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container, NavBar, Tabs,
} from 'components';
import PropTypes from 'prop-types';
import { getOrdersWhere, getOrders } from 'mocks/orders';
import OrderList from './OrderList';

const all = getOrders();
const completed = getOrdersWhere((orders) => orders.status === 'completed');
const toPay = getOrdersWhere((orders) => orders.status === 'to pay');
const toShip = getOrdersWhere((orders) => orders.status === 'to ship');
const toReceive = getOrdersWhere((orders) => orders.status === 'to receive');

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

const Orders = ({ navigation, route }) => {
  const { selectedTab } = route.params;
  return (
    <Container>
      <NavBar
        title="My Orders"
        onLeftIconPress={() => navigation.goBack()}
      />
      <Tabs
        selectedTab={selectedTab}
      >
        <View label="All" style={styles.flex}>
          <OrderList
            navigation={navigation}
            orders={all}
          />
        </View>
        <View label="To Pay" style={styles.flex}>
          <OrderList
            navigation={navigation}
            orders={toPay}
          />
        </View>
        <View label="To Ship" style={styles.flex}>
          <OrderList
            navigation={navigation}
            orders={toShip}
          />
        </View>
        <View label="To Receive" style={styles.flex}>
          <OrderList
            navigation={navigation}
            orders={toReceive}
          />
        </View>
        <View label="Completed" style={styles.flex}>
          <OrderList
            navigation={navigation}
            orders={completed}
          />
        </View>
        <View label="Cancelled" style={styles.flex}>
          <OrderList
            navigation={navigation}
          />
        </View>
        <View label="Return Refund" style={styles.flex}>
          <OrderList
            navigation={navigation}
          />
        </View>
      </Tabs>
    </Container>
  );
};

Orders.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Orders;
