import React from 'react';
import Route from './src/route';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import AuthProvider from './src/context/AuthProvider';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  // const isAuthenticationPage =
  //   Component === login ||
  //   Component === register ||
  //   Component === forgotPassword;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
