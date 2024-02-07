import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';

import HomeTabScreen from '../pages/HomeTabsScreen/HomeTabScreen';
import ActivitiesTabScreen from '../pages/HomeTabsScreen/ActivitiesTabScreen';
import AccountTabScreen from '../pages/HomeTabsScreen/AccountTabScreen';

const Tab = createBottomTabNavigator();

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const screenOptions = {
  headerShown: false,
  tabBarActiveBackgroundColor: '#ffffff',
  tabBarActiveTintColor: '#000000',
  tabBarInactiveBackgroundColor: '#ffffff',
  tabBarInactiveTintColor: '#aaaaaa',
  tabBarStyle: {
    height: Math.floor(height / 18),
  },
  tabBarLabelStyle: {
    marginTop: -Math.floor((height / 100) * 1.2),
    marginBottom: Math.floor((height / 100) * 1.3),
    fontFamily: 'UberMove-Bold',
    fontSize: Math.floor(height / 92),
  },
};

function TabBarIconElement(Icon: any, props: IconProps) {
  const iconWidth = Math.floor(width / 24);

  return <Icon {...props} size={iconWidth} />;
}

export default function MainRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTabScreen"
        options={{
          ...screenOptions,
          tabBarLabel: 'Página Inicial',
          tabBarIcon: ({color}) =>
            TabBarIconElement(EntypoIcon, {name: 'home', color: color}),
        }}
        component={HomeTabScreen}
      />
      <Tab.Screen
        name="ActivitiesTabScreen"
        options={{
          ...screenOptions,
          tabBarLabel: 'Atividade',
          tabBarIcon: ({color}) =>
            TabBarIconElement(MaterialIcons, {
              name: 'sticky-note-2',
              color: color,
            }),
        }}
        component={ActivitiesTabScreen}
      />
      <Tab.Screen
        name="AccountTabScreen"
        options={{
          ...screenOptions,
          tabBarLabel: 'Conta',
          tabBarIcon: ({color}) =>
            TabBarIconElement(Ionicons, {name: 'person', color: color}),
        }}
        component={AccountTabScreen}
      />
    </Tab.Navigator>
  );
}
