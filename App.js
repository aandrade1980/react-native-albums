/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={styles.containerView}>
    <Header title="Albums" />
    <AlbumList />
  </View>
);

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
});

export default App;
