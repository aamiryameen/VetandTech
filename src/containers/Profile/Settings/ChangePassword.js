import React from 'react';
import {
  Container,
  NavBar,
  Button,
  KeyboardAvoidingView,
  TextField,
} from 'components';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
    flex: 1,
  },
  form: {
    flex: 1,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: scale(14),
    marginBottom: scale(24),
  },
});

const ChangePassword = ({ navigation }) => (
  <Container backgroundColor="white">
    <NavBar
      title="Change Password"
      onLeftIconPress={() => navigation.goBack()}
    />
    <KeyboardAvoidingView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <TextField
          label="Current password"
          secureTextEntry
        />
        <TextField
          label="New password"
          secureTextEntry
        />
        <TextField
          label="Confirm password"
          secureTextEntry
        />
      </View>
      <Button
        label="Confirm"
        onPress={() => navigation.goBack()}
      />
    </KeyboardAvoidingView>
  </Container>
);

ChangePassword.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ChangePassword;
