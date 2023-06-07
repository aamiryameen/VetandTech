import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ActivityItem from './ActivityItem';

const ActivityList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.datetime}
    renderItem={({ item }) => (
      <ActivityItem {...item} />
    )}
  />
);

ActivityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ActivityList;
