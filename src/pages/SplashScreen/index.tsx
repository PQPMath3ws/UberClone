import * as React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

import UberLogoAnimation from '../../assets/animations/uber_logo_animation.json';

import {LottieLogoViewAnimation, ScreenView} from './styles';

function loadAppScreen(
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>,
) {
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'HomeTabsScreen',
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
  return (
    <ScreenView>
      <LottieLogoViewAnimation
        source={UberLogoAnimation}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => loadAppScreen(navigation)}
      />
    </ScreenView>
  );
}
