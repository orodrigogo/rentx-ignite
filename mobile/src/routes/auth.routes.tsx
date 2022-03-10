import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Confirmation } from '../screens/Confirmation';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen 
        name="Splash"
        component={Splash}
      />
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