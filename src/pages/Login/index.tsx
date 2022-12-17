import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const LoginScreen = () => {
  // eslint-disable-next-line react/prop-types
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button onPress={() => navigation.navigate('Dashboard')} title="Go" />
    </View>
  );
};

export default LoginScreen;
