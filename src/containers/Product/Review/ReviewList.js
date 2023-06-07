import React from 'react';
import { getNComments } from 'mocks/comments';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'components';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const ReviewList = ({
  numberOfReviews, navigation, hideHeader, itemAsCard,
}) => {
  const reviews = getNComments(numberOfReviews);
  return (
    <>
      {!hideHeader && (
        <View style={styles.title}>
          <Text weight="medium">Ratings & reviews</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Review')}>
            <Text color="gray50">View all</Text>
          </TouchableOpacity>
        </View>
      )}
      {reviews.map((review, index) => (
        <ReviewItem
          review={review}
          key={`${review.id}${index}`}
          asCard={itemAsCard}
        />
      ))}
    </>
  );
};

ReviewList.propTypes = {
  numberOfReviews: PropTypes.number,
  navigation: PropTypes.object,
  itemAsCard: PropTypes.bool,
  hideHeader: PropTypes.bool,
};

ReviewList.defaultProps = {
  numberOfReviews: 2,
  itemAsCard: false,
  hideHeader: false,
  navigation: {},
};
export default ReviewList;
