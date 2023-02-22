import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace('Login')}
        />
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
    fontFamily: 'Nunito-SemiBold',
    color: '#ffffff',
    marginTop: 91,
  },
});
