import { FormControl, Input, Text } from 'native-base';
import React from 'react';
import { Control, Controller, FieldError, Path, RegisterOptions } from 'react-hook-form';

interface FormInputControllerProps<FieldsType> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<FieldsType>;
}

interface Props<FieldsType> extends FormInputControllerProps<FieldsType> {
  label?: string;
  placeholder?: string;
}

const FormInputController = <FieldsType,>({ error, rules, label, control, name, placeholder, ...rest }: Props<FieldsType>) => {
  const isInvalid = error != null;
  const isRequired = rules != null && 'required' in rules;

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      {label != null && (
        <FormControl.Label>
          <Text fontWeight="bold" color="dark.200" fontSize="md">
            {label}
          </Text>
        </FormControl.Label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            fontSize="md"
            borderRadius={8}
            color="dark.300"
            autoCapitalize="none"
            backgroundColor={'gray.200'}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={(val) => onChange(val)}
            {...rest}
          />
        )}
        rules={rules}
      />
      {error != null && (
        <FormControl.ErrorMessage>
          <Text fontWeight="medium">{error.message}</Text>
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default FormInputController;
