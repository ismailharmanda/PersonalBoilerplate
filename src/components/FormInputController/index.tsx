import { FormControl, Input, Text } from 'native-base';
import React from 'react';
import { Control, Controller, FieldError, Path, RegisterOptions } from 'react-hook-form';

interface FormInputControllerProps<FieldsType> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
  size?: string;
  label?: string;
  placeholder?: string;
}

const FormInputController = <FieldsType,>({ error, rules, label, control, name, placeholder, size = 'xl', ...rest }: FormInputControllerProps<FieldsType>) => {
  const isInvalid = error != null;
  const isRequired = rules != null && 'required' in rules;

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} marginBottom={2}>
      {label != null && (
        <FormControl.Label>
          <Text fontWeight="medium" color="dark.200" fontSize="md">
            {label}
          </Text>
        </FormControl.Label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            size={size}
            borderRadius={8}
            color="dark.100"
            autoCapitalize="none"
            placeholder={placeholder}
            padding="3.5"
            value={value}
            onBlur={onBlur}
            fontSize="sm"
            borderWidth="0"
            backgroundColor="#f4f4f4"
            placeholderTextColor={'gray'}
            fontWeight="normal"
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
