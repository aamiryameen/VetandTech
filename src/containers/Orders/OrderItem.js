import React from 'react';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import {
  Text, Card, Avatar, LineItem,
} from 'components';
import PropTypes from 'prop-types';
import { getShopById } from 'mocks/shops';
import { scale } from 'react-native-size-matters';
import { getNProducts } from 'mocks/products';
import toUpper from 'lodash/toUpper';
import Colors from 'themes/colors';

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
    marginBottom: scale(14),
  },
  shop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: scale(14),
  },
  viewMore: {
    marginVertical: scale(14),
    paddingVertical: scale(10),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: Colors.gray10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  space: {
    marginTop: scale(14),
  },
});

const STATUS_COLOR = Object.freeze({
  completed: 'primary',
  'to pay': 'blue',
  'to ship': 'green',
  'to receive': 'gray75',
  cancelled: 'tertiary',
  refund: 'primaryAlt',
});

const OrderItem = ({ order, visibleProducts, navigation }) => {
  const { shopId, total, numberOfProducts } = order;
  const products = getNProducts(numberOfProducts);

  const slicedProducts = products.slice(0, visibleProducts);
  const remaining = products.length - visibleProducts;

  const shop = getShopById(shopId);
  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('OrderDetails', { id: order.id })}>
        <TouchableOpacity style={styles.shop} onPress={() => navigation.navigate('Shop', { id: shop.id })}>
          <Avatar source={shop.image} size={30} />
          <Text weight="medium" style={styles.name}>{shop.name}</Text>
        </TouchableOpacity>
        <View>
          {slicedProducts.map((product) => (
            <LineItem product={product} key={product.id} />
          ))}
          {remaining > 0 && (
            <View style={styles.viewMore}>
              <Text color="gray50">{`View ${remaining} more products`}</Text>
            </View>
          )}
        </View>
        <View style={[styles.footer, remaining <= 0 && styles.space]}>
          <Text weight="medium" font="h5" color={STATUS_COLOR[order.status]}>{toUpper(order.status)}</Text>
          <Text>{`Total ${total}`}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};
OrderItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
  visibleProducts: PropTypes.number.isRequired,
};

export default OrderItem;
