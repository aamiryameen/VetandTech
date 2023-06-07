import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {
  TextField, KeyboardAvoidingView, Text, IconButton, Button,
} from 'components';
import PropTypes from 'prop-types';
import Colors from 'themes/colors';
import { scale } from 'react-native-size-matters';
import Amex from 'svgs/amex.svg';
import MasterCard from 'svgs/mastercard.svg';
import Visa from 'svgs/visa.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CvvModal from './CvvModal';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  form: {
    backgroundColor: Colors.white,
    paddingHorizontal: scale(14),
    paddingTop: scale(24),
    paddingBottom: scale(14),
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    marginHorizontal: scale(7),
  },
  card: {
    marginBottom: scale(14),
  },
  header: {
    padding: scale(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: scale(10),
  },
  secure: {
    marginLeft: scale(5),
  },
  shield: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: scale(14),
  },
});

const CardForm = ({
  cardNumber, cardholderName, expiry, cvv,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.flex}>
      <KeyboardAvoidingView>
        <View style={styles.header}>
          <Text font="p1">Add a new credit/debit card</Text>
          <View style={styles.shield}>
            <Icon
              name="shield-check-outline"
              size={scale(22)}
              color={Colors.green}
            />
            <View style={styles.secure}>
              <Text color="green" weight="medium" style={styles.text}>SECURITY</Text>
              <Text color="green" weight="medium" style={styles.text}>GUARANTEED</Text>
            </View>
          </View>
        </View>
        <View style={styles.form}>
          <View style={[styles.row, styles.card]}>
            <MasterCard height={scale(40)} width={scale(40)} />
            <Visa height={scale(40)} width={scale(40)} />
            <Amex height={scale(40)} width={scale(40)} />
          </View>
          <TextField
            label="Card number"
            initialValue={cardNumber}
          />
          <TextField
            label="Cardholder name"
            initialValue={cardholderName}
          />
          <View style={styles.row}>
            <View style={styles.flex}>
              <TextField
                label="Expiration (MM/YY)"
                initialValue={expiry}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.flex}>
              <TextField
                label="CVV"
                initialValue={cvv}
                renderRightComponent={() => (
                  <IconButton
                    iconType="MaterialCommunityIcons"
                    icon="information"
                    size={20}
                    color="blue"
                    onPress={() => setModalVisible(true)}
                  />
                )}
              />
            </View>
          </View>
          <Text color="gray50">
            I acknowledge that my card information is saved in my Eclipse account
            and One Time Password might not be required for transactions on Eclipse.
          </Text>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonContainer}>
        <Button label="Save" />
      </View>
      <CvvModal isVisible={isModalVisible} onModalClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
};

CardForm.propTypes = {
  cardNumber: PropTypes.string,
  cardholderName: PropTypes.string,
  expiry: PropTypes.string,
  cvv: PropTypes.string,
};

CardForm.defaultProps = {
  cardNumber: '',
  cardholderName: '',
  expiry: '',
  cvv: '',
};

export default CardForm;
