import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import loadingStyles from '../styles/LoadingStyles';

const Loading = () => {
  return (
    <View style={loadingStyles.loading}>
      <ActivityIndicator size="large" color="#ff9b54" />
    </View>
  );
};

export default Loading;
