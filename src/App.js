import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import firebase from '@react-native-firebase/app';

import Router from './routes';
const App = () => {
  const apps = firebase.apps;

  apps.forEach(app => {
    console.log('App name: ', app.options);
  });

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
