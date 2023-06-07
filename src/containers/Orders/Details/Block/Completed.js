import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Button } from 'components';
import { scale } from 'react-native-size-matters';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
  },
  review: {
    marginBottom: scale(14),
  },
});

const Completed = ({ navigation }) => (
  <Card style={styles.container}>
    <Text style={styles.review}>
      Order has been succesfully delivered to receiver. Please consider leaving a review.
    </Text>
    <Button
      label="Leave Review"
      onPress={() => navigation.navigate('AddReview')}
    />
  </Card>
);

Completed.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Completed;
