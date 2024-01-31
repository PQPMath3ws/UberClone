import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainRoutes from './main.routes';

import {useAuth} from '../hooks/authentication';

import LoginScreen from '../pages/LoginScreen';
import SplashScreen from '../pages/SplashScreen';
import WelcomeScreen from '../pages/WelcomeScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function AppRoutes(): React.ReactElement {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          options={screenOptions}
          component={SplashScreen}
        />
        {!user && (
          <Stack.Screen
            name="WelcomeScreen"
            options={screenOptions}
            component={WelcomeScreen}
          />
        )}
        {!user && (
          <Stack.Screen
            name="LoginScreen"
            options={screenOptions}
            component={LoginScreen}
          />
        )}
        {user && (
          <Stack.Screen
            name="HomeTabsScreen"
            options={screenOptions}
            component={MainRoutes}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
