import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, NavBar, Text, Switch,
} from 'components';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
import Colors from 'themes/colors';

const styles = StyleSheet.create({
  container: {
  },
  label: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(8),
  },
  listItem: {
    backgroundColor: Colors.white,
    padding: scale(14),
    borderBottomWidth: 1,
    borderColor: Colors.gray10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const PrivacySettings = ({ navigation }) => (
  <Container>
    <NavBar
      title="Privacy Settings"
      onLeftIconPress={() => navigation.goBack()}
    />
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text>Private Activities</Text>
        <Switch initialValue />
      </View>
      <View style={styles.label}>
        <Text color="gray50" font="h5">
          Turn on private activity to hide your like activity and
          comment activity from all your followers.
        </Text>
      </View>

      <View style={styles.listItem}>
        <Text>Hide my likes</Text>
        <Switch />
      </View>
      <View style={styles.label}>
        <Text color="gray50" font="h5">
          People cannot see your likes in shop profile page if enabled.
        </Text>
      </View>

      <View style={styles.listItem}>
        <Text>Invisible to contacts</Text>
        <Switch initialValue />
      </View>
      <View style={styles.label}>
        <Text color="gray50" font="h5">
          Enable the option if you do not wish to be found by contact friends.
        </Text>
      </View>
    </View>
  </Container>
);

PrivacySettings.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default PrivacySettings;
