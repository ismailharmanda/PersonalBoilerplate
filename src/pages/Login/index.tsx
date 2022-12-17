import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { IGlobalState } from 'store/reducers';
import { LoginState, LOGIN_ACTION_TYPES } from './login.action';
import { GenericActionCreator } from 'utils';
import { Center, Input, Button, Text } from 'native-base';

const LoginScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const state = useSelector<IGlobalState, LoginState>((state) => state.LOGIN);
  console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GenericActionCreator({ type: LOGIN_ACTION_TYPES.LOGIN_REQUEST }));
  }, []);

  return (
    <Center flex={1} padding={10} justifyContent="flex-start">
      <Text fontSize={30} marginBottom={40}>
        Attendans App
      </Text>
      <Input marginBottom={5} size="2xl" />
      <Input marginBottom={10} size="2xl" />
      <Button onPress={() => navigation.navigate('Dashboard')} width={'100%'}>
        Giriş Yap
      </Button>
    </Center>
  );
};

export default LoginScreen;
