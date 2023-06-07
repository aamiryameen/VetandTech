import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card } from 'components';
import { scale, verticalScale } from 'react-native-size-matters';
import Refer from 'svgs/refer.svg';

const styles = StyleSheet.create({
  card: {
    marginTop: verticalScale(14),
  },
  container: {
    flexDirection: 'row',
    height: verticalScale(80),
    padding: scale(14),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Referral = () => (
  <Card style={styles.card}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text font="h4" weight="medium">Invite a friend</Text>
        <Text font="p2">Earn rewards and get 1000 coins for each successful referral!</Text>
      </View>
      <Refer width={scale(80)} height={verticalScale(55)} />
    </View>

  </Card>
);

export default Referral;
