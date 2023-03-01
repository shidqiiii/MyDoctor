import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils';
import Button from './Button';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan untuk Nairobi" />
      <Button type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    maxHeight: 45,
  },
});
