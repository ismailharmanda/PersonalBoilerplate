import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { IGlobalState } from 'store/reducers';
import { LoginState, LOGIN_ACTION_TYPES } from './login.action';
import { GenericActionCreator } from 'utils';
import { Center, Text } from 'native-base';
import { useForm } from 'react-hook-form';
import FormInputController from 'components/FormInputController';
import PrimaryButton from 'components/Button';

enum FormFields {
  email = 'email',
  password = 'password',
}

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const state = useSelector<IGlobalState, LoginState>((state) => state.LOGIN);
  console.log(state);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GenericActionCreator({ type: LOGIN_ACTION_TYPES.LOGIN_REQUEST }));
  }, []);

  return (
    <Center flex={1} padding={10} justifyContent="flex-start">
      <Text fontSize={30} marginBottom={40}>
        Attendance App
      </Text>
      {/* <Input marginBottom={5} size="2xl" /> */}
      {/* <Input marginBottom={10} size="2xl" /> */}
      <FormInputController
        size="2xl"
        control={control}
        error={errors.email}
        label={'Email'}
        name={FormFields.email}
        placeholder={'Email adresinizi giriniz'}
        rules={{
          required: 'Boş bırakılamaz',
        }}
      />
      <FormInputController
        size="2xl"
        control={control}
        error={errors.password}
        label={'Şifre'}
        name={FormFields.password}
        placeholder={'Şifrenizi giriniz'}
        rules={{
          required: 'Boş bırakılamaz',
        }}
      />
      <PrimaryButton onPress={onSubmit} buttonText="Giriş Yap" marginTop={10}></PrimaryButton>
    </Center>
  );
};

export default LoginScreen;
