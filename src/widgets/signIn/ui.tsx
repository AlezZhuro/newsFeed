import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';

import {authModel} from 'entities';
import {loginSchema, parseErrorMsg} from './lib';
import {NavProp, Screens} from 'shared';
import {PasswordInput, TextInput} from 'shared/ui';
import {LoginFieldsNames, useAppDispatch} from 'shared/lib';

interface LogInProps {}

export const SignIn: React.FC<LogInProps> = () => {
  const dispatch = useAppDispatch();
  const navigations = useNavigation<NavProp<Screens.SIGN_IN>>();

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [errorMsg, setErrorMsg] = React.useState({email: '', password: ''});

  const [isLoading, setIsLoading] = React.useState(false);

  const onChangeText = (name: LoginFieldsNames, text: string) => {
    setErrorMsg(prev => ({...prev, [name]: ''}));
    if (name === 'email') {
      setEmail(text);
    } else {
      setPassword(text);
    }
  };

  const loginHandle = async () => {
    try {
      setIsLoading(true);
      const credentials = await loginSchema.validate(
        {email, password},
        {abortEarly: true},
      );

      const {payload} = await dispatch(authModel.login(credentials));

      if (payload) {
        navigations.replace(Screens.HOME);
      }
    } catch (error: any) {
      const errors = parseErrorMsg(error.message);
      setErrorMsg(errors);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={tw`flex-1 flex-col justify-center`}>
      <KeyboardAvoidingView behavior="padding" style={tw`flex-1`}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw`flex-1 flex-col justify-center gap-4`}>
            <View style={tw`flex-row justify-center items-center w-full`}>
              <Text style={tw`text-xl text-center`}>Login</Text>
            </View>
            <TextInput
              name="email"
              value={email}
              onChangeField={onChangeText}
              errorMsg={errorMsg.email}
              hasError={!!errorMsg.email.length}
              mode="outlined"
              label="Email"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
            />
            <PasswordInput
              name="password"
              value={password}
              onChangeField={onChangeText}
              errorMsg={errorMsg.password}
              hasError={!!errorMsg.password.length}
              mode="outlined"
              label="Password"
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <Button
              mode="contained"
              onPress={loginHandle}
              loading={isLoading}
              disabled={isLoading}>
              Login
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};
