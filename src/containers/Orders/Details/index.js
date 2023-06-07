import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, StyleSheet,
} from 'react-native';
import {
  Container, NavBar, Timeline, TimelineBlock, Tabs, LineItem, Card, Text,
} from 'components';
import { scale } from 'react-native-size-matters';
import { getOrderById } from 'mocks/orders';
import { getNProducts } from 'mocks/products';
import ShippingBlock from './Block/Shipping';
import OrderBlock from './Block/Order';
import PackageBlock from './Block/Package';
import CompletedBlock from './Block/Completed';

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    padding: scale(14),
  },
  products: {
    padding: scale(14),
    marginBottom: scale(14),
  },
  scrollView: {
    padding: scale(14),
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
});

const OrderDetails = ({ navigation, route }) => {
  const { id } = route.params;
  const order = getOrderById(id);
  const products = getNProducts(order?.numberOfProducts);
  return (
    <Container>
      <NavBar
        title={`Order #${order.orderNumber}`}
        onLeftIconPress={() => navigation.goBack()}
      />
      <Tabs>
        <View style={styles.flex} label="Order">
          <ScrollView style={styles.scrollView}>
            <Card style={styles.products}>
              {products.map((product) => <LineItem product={product} key={product.id} />)}
            </Card>
            <Card style={styles.price}>
              <View style={styles.row}>
                <Text>Subtotal</Text>
                <Text>{order.subtotal}</Text>
              </View>
              <View style={styles.row}>
                <Text>Shipping fee</Text>
                <Text>{order.shippingFee}</Text>
              </View>
              <View style={styles.row}>
                <Text>Grand total</Text>
                <Text weight="medium">{order.total}</Text>
              </View>
            </Card>
          </ScrollView>
        </View>

        <ScrollView label="Tracking" contentContainerStyle={styles.container}>
          <Timeline currentIndex={4} reverse>
            <TimelineBlock
              icon="edit-3"
              title="Order received"
              subtitle="22 February 2020 09:23"
              hideTrack
            >
              <OrderBlock />
            </TimelineBlock>
            <TimelineBlock
              icon="dollar-sign"
              title="Payment received"
              subtitle="22 February 2020 10:15"
            />
            <TimelineBlock
              icon="package"
              title="Seller is packing your order"
              subtitle="22 February 2020 11:39"
            >
              <PackageBlock />
            </TimelineBlock>
            <TimelineBlock
              icon="truck"
              title="Courier partner picked up the package"
              subtitle="22 February 2020 2:12"
            >
              <ShippingBlock />
            </TimelineBlock>
            <TimelineBlock
              icon="check"
              title="Order successfully delivered"
              subtitle="23 February 2020 08:54"
            >
              <CompletedBlock navigation={navigation} />
            </TimelineBlock>
          </Timeline>
        </ScrollView>
      </Tabs>
    </Container>
  );
};
OrderDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default OrderDetails;
