import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

import UberLogoAnimation from '../../assets/animations/uber_logo_animation.json';

import {LottieLogoViewAnimation, ScreenView} from './styles';

function loadAppScreen(
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>,
  hasUser: boolean
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
  const [hasUser, setHasUser] = React.useState(false);

  async function isLoggedIn() {
    try {
      const user_info = await AsyncStorage.getItem('user_info');
      return user_info ? true : false;
    } catch {
      return false;
    }
  }

  React.useEffect(() => {
    isLoggedIn().then(value => {
      setHasUser(value);
    });
  }, [hasUser]);

  return (
    <ScreenView>
      <LottieLogoViewAnimation
        source={UberLogoAnimation}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => loadAppScreen(navigation, hasUser)}
      />
    </ScreenView>
  );
}
