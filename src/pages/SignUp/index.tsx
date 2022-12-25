import React from 'react';
import { Center, Text } from 'native-base';
import { useForm } from 'react-hook-form';
import FormInputController from 'components/FormInputController';
import PrimaryButton from 'components/Button';

enum SignUpFormFields {
  email = 'email',
  password = 'password',
}

type SignUpFormValues = {
  email: string;
  password: string;
};

const SignUpScreen = () => {
  // const navigation: NavigationProp<ParamListBase> = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Center flex={1} padding={10} justifyContent="flex-start" backgroundColor={'white'}>
      <Text fontSize={30} marginBottom={40}>
        Attendance App
      </Text>
      <FormInputController
        size="2xl"
        control={control}
        error={errors.email}
        label={'Email'}
        name={SignUpFormFields.email}
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
        name={SignUpFormFields.password}
        placeholder={'Şifrenizi giriniz'}
        rules={{
          required: 'Boş bırakılamaz',
        }}
      />
      <FormInputController
        size="2xl"
        control={control}
        error={errors.password}
        label={'Şifre'}
        name={SignUpFormFields.password}
        placeholder={'Şifrenizi giriniz'}
        rules={{
          required: 'Boş bırakılamaz',
        }}
      />
      <PrimaryButton onPress={onSubmit} buttonText="Kayıt Ol" marginTop={10}></PrimaryButton>
    </Center>
  );
};

export default SignUpScreen;
