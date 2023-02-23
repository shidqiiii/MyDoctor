import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../assets';
import {colors} from '../utils';
import Gap from './Gap';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
  },
});
