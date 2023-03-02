import firebase from '@react-native-firebase/app';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import Router from './routes';

const App = () => {
  const apps = firebase.apps;

  apps.forEach(app => {
    console.log('App name: ', app.options);
  });

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
