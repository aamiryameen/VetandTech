import React from 'react';
import {
  Container, NavBar, Divider, TextField, Text,
} from 'components';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
import FormContaienr from './FormContainer';

const styles = StyleSheet.create({
  divider: {
    marginBottom: scale(30),
  },
});

const ForgotPassword = ({ navigation }) => (
  <Container asGradient>
    <NavBar
      onLeftIconPress={() => navigation.goBack()}
    />
    <FormContaienr
      title="Forgot your password?"
      subtitle="We got your back! Let us know your email or phone number and we will send a 6-digits PIN for verification to reset your password."
      buttonLabel="Continue"
      onSubmit={() => navigation.navigate('OTP')}
    >
      <TextField label="Email address" />
      <Divider style={styles.divider}>
        <Text color="gray50">or</Text>
      </Divider>
      <TextField label="Phone number" />
    </FormContaienr>
  </Container>
);

ForgotPassword.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ForgotPassword;
