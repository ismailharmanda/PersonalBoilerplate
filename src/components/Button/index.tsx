import React from 'react';
import { Button, Text } from 'native-base';

interface PrimaryButtonProps {
  onPress: () => void;
  buttonText: string;
  marginTop?: number;
}

const PrimaryButton = ({ onPress, buttonText, ...props }: PrimaryButtonProps) => {
  return (
    <Button _pressed={{ opacity: 0.4 }} padding={'12px'} borderRadius={8} backgroundColor={'#6610f2'} onPress={onPress} width={'100%'} {...props}>
      <Text fontSize="md" color={'white'} fontWeight="semibold">
        {buttonText}
      </Text>
    </Button>
  );
};

export default PrimaryButton;
