import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SplashRoutes } from './splash.routes';


export function Routes() {

  return (
    <NavigationContainer>
      <SplashRoutes />
    </NavigationContainer>
  );
}