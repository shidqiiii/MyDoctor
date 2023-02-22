import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={{height: 16}} />
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 91,
  },
});
