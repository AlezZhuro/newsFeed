import {BaseToast, BaseToastProps} from 'react-native-toast-message';

export const toastConfig = {
  customError: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'red', marginTop: 10}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 16,
        fontWeight: '400',
      }}
      text2NumberOfLines={6}
    />
  ),
};
