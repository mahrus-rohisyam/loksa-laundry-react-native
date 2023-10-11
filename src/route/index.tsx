import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Login, OnBoarding, Register, Home, Activity, Profile, OrderDetail } from '../pages';
import { CBottom } from '../components/global';

export type RootStackParamList = {
  Home: undefined;
  Activity: undefined;
  Profile: undefined;
  Conversation: undefined;
  Login: undefined;
  Register: undefined;
  Signup: undefined;
  NotFound: undefined;
  Splash: undefined;
  OnBoarding: undefined;
  MainApp: undefined;
  OrderDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const MainApp: React.FC = () => {
  const Off = { headerShown: false };
  return (
    <Tab.Navigator tabBar={props => <CBottom {...props} />}>
      <Tab.Screen name='Home' component={Home} options={Off} />
      <Tab.Screen name='Activity' component={Activity} options={Off} />
      <Tab.Screen name='Profile' component={Profile} options={Off} />
    </Tab.Navigator>
  );
};

const Route: React.FC = () => {
  const Off = { headerShown: false };
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen name="MainApp" component={MainApp} options={Off} />
      <Stack.Screen name="Login" component={Login} options={Off} />
      <Stack.Screen name="Register" component={Register} options={Off} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} options={Off} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} options={Off} />
    </Stack.Navigator>
  );
};

export default Route;
