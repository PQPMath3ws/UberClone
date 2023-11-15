import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeTabScreen from '../pages/HomeTabsScreen/HomeTabScreen';
import ActivitiesTabScreen from '../pages/HomeTabsScreen/ActivitiesTabScreen';
import AccountTabScreen from '../pages/HomeTabsScreen/AccountTabScreen';

const Tab = createBottomTabNavigator();

const height = Dimensions.get('screen').height;

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    height: Math.floor(height / 18),
  },
};

export default function MainRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTabScreen"
          options={screenOptions}
          component={HomeTabScreen}
        />
        <Tab.Screen
          name="ActivitiesTabScreen"
          options={screenOptions}
          component={ActivitiesTabScreen}
        />
        <Tab.Screen
          name="AccountTabScreen"
          options={screenOptions}
          component={AccountTabScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
