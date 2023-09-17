import React from 'react';
import Route from './src/route';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import AuthProvider from './src/context/AuthProvider';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <Route />
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
