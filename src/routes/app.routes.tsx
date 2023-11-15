import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../pages/SplashScreen';
import MainRoutes from './main.routes';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function AppRoutes(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          options={screenOptions}
          component={SplashScreen}
        />
        <Stack.Screen
          name="HomeTabsScreen"
          options={screenOptions}
          component={MainRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
