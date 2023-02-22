import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import firebase from '@react-native-firebase/app';

const App = () => {
  const apps = firebase.apps;

  apps.forEach(app => {
    console.log('App name: ', app.options);
  });

  return (
    <View>
      <Text>Test Firebase</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
