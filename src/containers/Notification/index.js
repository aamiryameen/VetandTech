import React from 'react';
import { Container, NavBar, Tabs } from 'components';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { getActivities, getNews } from 'mocks/notifications';
import Colors from 'themes/colors';
import ActivityList from './Activity';
import NewsList from './News';

const activities = getActivities();
const news = getNews();

const styles = StyleSheet.create({
  activities: {
    flex: 1,
  },
  news: {
    flex: 1,
    backgroundColor: Colors.gray5,
  },
});

const Notification = ({ navigation }) => (
  <Container backgroundColor="white">
    <NavBar
      title="Notifications"
      onLeftIconPress={() => navigation.goBack()}
    />
    <Tabs>
      <View label="Activities" style={styles.activities}>
        <ActivityList data={activities} />
      </View>
      <View label="News" style={styles.news}>
        <NewsList data={news} />
      </View>
    </Tabs>
  </Container>
);

Notification.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Notification;
