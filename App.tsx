import React from 'react';
import Route from './src/route';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}

export default App;
