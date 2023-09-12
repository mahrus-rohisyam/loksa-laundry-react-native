import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Login, OnBoarding} from '../pages';
import {useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Conversation: undefined;
  Login: undefined;
  Register: undefined;
  Signup: undefined;
  NotFound: undefined;
  Splash: undefined;
};

const Route = () => {
  const Stack = createNativeStackNavigator();
  const Off = {headerShown: false};

  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen name="OnBoarding" component={OnBoarding} options={Off} />
      <Stack.Screen name="Login" component={Login} options={Off} />
    </Stack.Navigator>
  );
};

export default Route;
