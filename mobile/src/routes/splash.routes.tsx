import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useAuth } from '../hooks/auth';
import { Splash } from '../screens/Splash';
import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

const { Navigator, Screen } = createStackNavigator();

export function SplashRoutes() {
  const { user } = useAuth();

  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="Home"
        component={user.id ? AppTabRoutes : AuthRoutes}
      />
    </Navigator>
  )
}