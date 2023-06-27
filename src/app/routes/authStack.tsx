import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from 'screens';
import {RootStackParamList, Screens} from 'shared/routes';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

export const AuthStackRouting = () => {
  return (
    <AuthStack.Navigator screenOptions={{
        headerShown: false
    }}>
      <AuthStack.Group>
        <AuthStack.Screen name={Screens.SIGN_IN} component={SignInScreen} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};
