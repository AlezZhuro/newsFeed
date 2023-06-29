import React, {useState} from 'react';
import {View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

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

export const PasswordInput: React.FC<InputProps & TextInputProps> = ({
  value,
  onChangeField,
  name,
  errorMsg,
  hasError,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onChangeText = (text: string) => onChangeField(name, text);

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!isVisible}
        right={
          <TextInput.Icon
            onPress={() => setIsVisible(prev => !prev)}
            icon={isVisible ? 'eye' : 'eye-off'}
          />
        }
        {...rest}
      />
      {hasError && (
        <HelperText type="error" visible={hasError}>
          {errorMsg}
        </HelperText>
      )}
    </View>
  );
};
