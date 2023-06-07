import React from 'react';
import { Text } from 'components';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from 'themes/colors';

const styles = StyleSheet.create({
  card: {
    padding: scale(14),
    marginBottom: scale(14),
    backgroundColor: Colors.white,
  },
  text: {
    marginTop: scale(14),
  },
});

const Details = () => (
  <View style={styles.card}>
    <Text weight="medium">Product details</Text>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla sapien lacus, fringilla vitae condimentum sed, placerat id nulla.
      Phasellus et lacus risus. Integer venenatis nunc quam, at suscipit neque sagittis vitae.
      Curabitur ultricies ligula vitae ante fringilla eleifend.
      Duis nunc eros, venenatis vitae pretium vitae, molestie at neque.
      Sed dignissim pellentesque tempor.
      Nam tellus diam, placerat eget quam sit amet, cursus maximus odio.
      Pellentesque euismod, nisl euismod consectetur dapibus,
      mauris tellus semper enim, ultrices vulputate felis eros nec arcu.
      Nullam id leo dolor.
    </Text>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla sapien lacus, fringilla vitae condimentum sed, placerat id nulla.
      Phasellus et lacus risus. Integer venenatis nunc quam, at suscipit neque sagittis vitae.
      Curabitur ultricies ligula vitae ante fringilla eleifend.
      Duis nunc eros, venenatis vitae pretium vitae, molestie at neque.
      Sed dignissim pellentesque tempor.
      Nam tellus diam, placerat eget quam sit amet, cursus maximus odio.
      Pellentesque euismod, nisl euismod consectetur dapibus,
      mauris tellus semper enim, ultrices vulputate felis eros nec arcu.
      Nullam id leo dolor.
    </Text>
  </View>
);

export default Details;
