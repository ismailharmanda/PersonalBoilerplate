/* import { useNavigation } from '@react-navigation/native'; */
import React, { useEffect } from 'react';
/* import { NavigationProp, ParamListBase } from '@react-navigation/native'; */
import { useDispatch, useSelector } from 'react-redux';
import { IGlobalState } from 'store/reducers';
import { LoginState, LOGIN_ACTION_TYPES } from './login.action';
import { GenericActionCreator } from 'utils';
import { Center } from 'native-base';
import { useForm } from 'react-hook-form';
import FormInputController from 'components/FormInputController';
import PrimaryButton from 'components/Button';

enum FormFields {
  email = 'email',
  password = 'password',
}

type FormValues = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  // const navigation: NavigationProp<ParamListBase> = useNavigation();
  const state = useSelector<IGlobalState, LoginState>((state) => state.LOGIN);
  console.log(state);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GenericActionCreator({ type: LOGIN_ACTION_TYPES.LOGIN_REQUEST }));
  }, []);

  return (
    <Center flex={1} padding={10} justifyContent="center" backgroundColor={'white'}>
      <FormInputController
        size="2xl"
        control={control}
        error={errors.email}
        label={'Email'}
        name={FormFields.email}
        placeholder={'Email adresinizi giriniz'}
        rules={{
          required: 'Bu alan zorunludur',
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
          required: 'Bu alan zorunludur',
        }}
      />
      <PrimaryButton onPress={onSubmit} buttonText="Giriş Yap" marginTop={10}></PrimaryButton>
    </Center>
  );
};

export default LoginScreen;
