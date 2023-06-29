import React, {useState} from 'react';
import {View} from 'react-native';
import {HelperText, TextInput as Input} from 'react-native-paper';

import {Props as TextInputProps} from 'react-native-paper/src/components/TextInput/TextInput';
import {LoginFieldsNames} from 'shared/lib';
import tw from 'twrnc';

interface InputProps {
  value: string;
  onChangeField: (name: LoginFieldsNames, text: string) => void;
  name: LoginFieldsNames;
  hasError: boolean;
  errorMsg: string;
}

export const TextInput: React.FC<InputProps & TextInputProps> = ({
  value,
  onChangeField,
  name,
  errorMsg,
  hasError,
  ...rest
}) => {
  const onChangeText = (text: string) => onChangeField(name, text);

  return (
    <View>
      <Input value={value} onChangeText={onChangeText} {...rest} />
      {hasError && <HelperText type="error" visible={hasError}>
        {errorMsg}
      </HelperText>}
    </View>
  );
};
