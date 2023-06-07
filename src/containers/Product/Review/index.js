import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NavBar, Container } from 'components';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
import ReviewList from './ReviewList';

const styles = StyleSheet.create({
  container: {
    padding: scale(14),
  },
});

const Review = ({ navigation }) => (
  <Container>
    <NavBar
      title="Reviews & Ratings"
      onLeftIconPress={() => navigation.goBack()}
    />
    <ScrollView contentContainerStyle={styles.container}>
      <ReviewList numberOfReviews={10} itemAsCard hideHeader />
    </ScrollView>
  </Container>
);

Review.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Review;
