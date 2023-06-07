import React from 'react';
import {
  Container,
  NavBar,
  Avatar,
  Button,
  KeyboardAvoidingView,
  TextField,
} from 'components';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { getProfile } from 'mocks/me';
import { scale } from 'react-native-size-matters';

const profile = getProfile();

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

const EditProfile = ({ navigation }) => (
  <Container backgroundColor="white">
    <NavBar
      title="Edit Profile"
      onLeftIconPress={() => navigation.goBack()}
    />
    <KeyboardAvoidingView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Avatar
          source={profile.image}
          size={100}
          style={styles.avatar}
        />
        <TextField
          label="Name"
          initialValue={profile.name}
        />
        <TextField
          label="Email address"
          initialValue={profile.email}
        />
        <TextField
          label="Username"
          initialValue={profile.email}
        />
      </View>
      <Button
        label="Update"
        onPress={() => navigation.goBack()}
      />
    </KeyboardAvoidingView>
  </Container>
);

EditProfile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EditProfile;
