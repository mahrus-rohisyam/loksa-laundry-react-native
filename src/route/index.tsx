import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, OnBoarding } from '../pages';


const Route = () => {
  const Stack = createNativeStackNavigator();
  const Off = {headerShown: false}

  return (
    <Stack.Navigator initialRouteName='OnBoarding'>
      <Stack.Screen name='OnBoarding' component={OnBoarding} options={Off}/>
      <Stack.Screen name='Login' component={Login} options={Off}/>
    </Stack.Navigator>
  )
}

export default Route