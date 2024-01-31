import * as React from 'react';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {LottieLogoViewAnimation, ScreenView} from './styles';

import {useAuth} from '../../hooks/authentication';

import UberLogoAnimation from '../../assets/animations/uber_logo_animation.json';

function loadAppScreen(
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>,
  hasUser: boolean,
) {
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: hasUser ? 'HomeTabsScreen' : 'WelcomeScreen',
        },
      ],
    });
  }, 1000);
}

export default function SplashScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>;
}): React.ReactElement {
  const {user} = useAuth();

  return (
    <ScreenView>
      <LottieLogoViewAnimation
        source={UberLogoAnimation}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => loadAppScreen(navigation, user ? true : false)}
      />
    </ScreenView>
  );
}
