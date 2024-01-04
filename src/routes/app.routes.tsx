import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../pages/SplashScreen';
import MainRoutes from './main.routes';
import WelcomeScreen from '../pages/WelcomeScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function AppRoutes(): React.ReactElement {
  const [hasUser, setHasUser] = React.useState(false);

  async function checkForUser() {
    try {
      const user_info = await AsyncStorage.getItem('user_info');
      return user_info ? true : false;
    } catch {
      return false;
    }
  }

  React.useEffect(() => {
    checkForUser().then(value => {
      setHasUser(value);
    });
  }, [hasUser]);

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
        {!hasUser && (
          <Stack.Screen
            name="WelcomeScreen"
            options={screenOptions}
            component={WelcomeScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
