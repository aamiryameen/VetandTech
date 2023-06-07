import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  NavBar, Container, Text, GradientBlock, IconButton, ProductList, Avatar,
} from 'components';
import { scale, verticalScale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import { getNavBarHeight } from 'utils/size';
import { getProfile } from 'mocks/me';
import { getNProducts } from 'mocks/products';
import MetaTab from './Section/MetaTab';
import MyOrders from './Section/MyOrders';
import Referral from './Section/Referral';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: scale(14),
  },
  container: {
    paddingHorizontal: scale(14),
    paddingTop: verticalScale(14),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginLeft: scale(14),
  },
  nameContainer: {
    marginVertical: scale(14),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const profile = getProfile();
const products = getNProducts(4);

const Profile = ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);

  const onScroll = (y) => {
    setVisible(y > getNavBarHeight());
  };

  return (
    <Container>
      <NavBar
        renderLeftComponent={() => {
          if (isVisible) {
            return (
              <View style={styles.row}>
                <Avatar
                  source={profile.image}
                  size={35}
                />
                <View style={styles.name}>
                  <Text color="white" weight="medium">{profile.name}</Text>
                  <Text color="white">{profile.username}</Text>
                </View>
              </View>
            );
          }
          return null;
        }}
        renderRightComponent={() => (
          <IconButton
            icon="settings"
            color="white"
            size={22}
            onPress={() => navigation.navigate('Settings')}
          />
        )}
      />
      <ScrollView
        bounces={false}
        onScroll={({ nativeEvent: { contentOffset: { y } } }) => onScroll(y)}
        scrollEventThrottle={16}
      >
        <GradientBlock style={styles.header}>
          <View style={styles.row}>
            <Avatar
              source={profile.image}
              size={60}
            />
            <MetaTab navigation={navigation} />
          </View>

          <View style={styles.nameContainer}>
            <View>
              <Text font="h2" color="white" weight="medium">{profile.name}</Text>
              <Text color="white">{profile.username}</Text>
            </View>
            <IconButton
              icon="qrcode"
              size={40}
              color="white"
              iconType="MaterialCommunityIcons"
              onPress={() => navigation.navigate('Pay')}
            />
          </View>
        </GradientBlock>
        <View style={styles.container}>
          <MyOrders
            navigation={navigation}
          />
          <Referral
            navigation={navigation}
          />
        </View>
        <ProductList
          title="Just for you"
          products={products}
          navigation={navigation}
        />
      </ScrollView>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Profile;
