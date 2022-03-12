import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Confirmation } from '../screens/Confirmation';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUpFirstStep"
        component={SignUpFirstStep}
      />
      <Screen
        name="SignUpSecondStep"
        component={SignUpSecondStep}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
      />
    </Navigator>
  )
}