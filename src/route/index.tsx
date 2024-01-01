import React, {useEffect} from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Login,
  OnBoarding,
  Register,
  Home,
  Activity,
  Profile,
  OrderDetail,
  Service,
  Orders,
  Dashboard,
  Reports,
} from '../pages';
import {CBottom} from '../components/global';
import {useAuth} from '../context/AuthProvider';
import {useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Home: any;
  Activity: any;
  Profile: any;
  Conversation: any;
  Login: any;
  Register: any;
  Signup: any;
  NotFound: any;
  Splash: any;
  OnBoarding: any;
  MainApp: any;
  MainAppAdmin: any;
  OrderDetail: any;
  Service: any;
  Orders: any;
  Dashboard: any;
  Reports: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

// MainApp User
const MainApp: React.FC = () => {
  const Off = {headerShown: false};
  const {authState} = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (authState.authenticated != null || undefined) {
      navigation.navigate('MainApp');
    } else {
      navigation.navigate('OnBoarding');
    }
  }, []);

  return (
    <Tab.Navigator tabBar={props => <CBottom {...props} />}>
      <Tab.Screen name="Home" component={Home} options={Off} />
      <Tab.Screen name="Activity" component={Activity} options={Off} />
      <Tab.Screen name="Profile" component={Profile} options={Off} />
    </Tab.Navigator>
  );
};

// MainApp Admin
const MainAppAdmin: React.FC = () => {
  const Off = {headerShown: false};
  const {authState} = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (authState.authenticated != null || undefined) {
      navigation.navigate('MainApp');
    } else {
      navigation.navigate('OnBoarding');
    }
  }, [authState]);

  return (
    <Tab.Navigator tabBar={props => <CBottom {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} options={Off} />
      <Tab.Screen name="Orders" component={Orders} options={Off} />
      <Tab.Screen name="Reports" component={Reports} options={Off} />
      <Tab.Screen name="Profile" component={Profile} options={Off} />
    </Tab.Navigator>
  );
};

const Route: React.FC = () => {
  const Off = {headerShown: false};
  const {authState} = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (authState.authenticated != null || undefined) {
      navigation.navigate('MainApp');
    } else {
      navigation.navigate('OnBoarding');
    }
  }, [authState]);

  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen name="MainApp" component={MainApp} options={Off} />
      <Stack.Screen
        name="MainAppAdmin"
        component={MainAppAdmin}
        options={Off}
      />
      <Stack.Screen name="Login" component={Login} options={Off} />
      <Stack.Screen name="Register" component={Register} options={Off} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} options={Off} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} options={Off} />
      <Stack.Screen name="Service" component={Service} options={Off} />
    </Stack.Navigator>
  );
};

export default Route;
