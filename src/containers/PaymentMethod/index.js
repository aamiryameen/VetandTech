import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, NavBar, ListItem, IconButton, Text,
} from 'components';
import PropTypes from 'prop-types';
import Colors from 'themes/colors';
import { scale } from 'react-native-size-matters';
import Visa from 'svgs/visa.svg';
import MasterCard from 'svgs/mastercard.svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getProfile } from 'mocks/me';

const styles = StyleSheet.create({
  label: {
    padding: scale(14),
  },
  plus: {
    borderWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.gray25,
  },
});

const PaymentMethod = ({ navigation }) => {
  const { cards } = getProfile();

  return (
    <Container>
      <NavBar
        title="Payment Method"
        onLeftIconPress={() => navigation.goBack()}
        renderRightComponent={() => (
          <IconButton
            icon="plus"
            color="white"
            size={22}
            onPress={() => navigation.navigate('NewCard', { initialValues: {} })}
          />
        )}
      />
      <View style={styles.label}>
        <Text>Debit / Credit Cards</Text>
      </View>
      {cards.map((card) => {
        const Card = card.cardType === 'visa' ? Visa : MasterCard;
        return (
          <ListItem
            key={card.cardNumber}
            title={card.bankName}
            subtitle={card.cardNumberMasked}
            renderLeftComponent={() => (
              <Card />
            )}
            onPress={() => navigation.navigate('EditCard', { initialValues: { ...card } })}
          />
        );
      })}
      <ListItem
        title="Add new debit / credit card"
        renderLeftComponent={() => (
          <View style={styles.plus}>
            <Text color="gray25">+</Text>
          </View>
        )}
        onPress={() => navigation.navigate('NewCard', { initialValues: {} })}
      />
      <View style={styles.label}>
        <Text>Others</Text>
      </View>
      <ListItem
        title="PayPal"
        renderLeftComponent={() => (
          <Icon
            name="paypal"
            size={scale(24)}
            color={Colors.blue}
          />
        )}
      />
      <ListItem
        title="Online Banking"
        subtitle="Internet banking log-in needed"
        renderLeftComponent={() => (
          <Icon
            name="university"
            size={scale(24)}
            color={Colors.tertiary}
          />
        )}
      />
    </Container>
  );
};

PaymentMethod.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PaymentMethod;
