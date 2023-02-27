import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Button, Gap, Header, Input, Profile} from '../../components';

const UpdateProfile = () => {
  return (
    <View style={styles.container}>
      <Header title="Update Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
