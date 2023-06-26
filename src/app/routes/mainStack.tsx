import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from 'screens';
import {RootStackParamList, Screens} from 'shared';

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const MainStackRouting = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Group>
        <MainStack.Screen name={Screens.HOME} component={HomeScreen} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
