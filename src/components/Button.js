import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#ffffff' : '#0bcad4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : '#ffffff',
  }),
});
