import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {isLocationEnabled, promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';

import {LottieLogoViewAnimation, ScreenView} from './styles';

import {useAuth} from '../../hooks/authentication';

import UberLogoAnimation from '../../assets/animations/uber_logo_animation.json';

export default function SplashScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>;
}): React.ReactElement {
  const {user} = useAuth();

  async function requestPermissionsAndCheckGPS() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Acesso ao GPS',
          message:
            'O app do Uber precisa da localização para te oferecer uma melhor experiência em suas viagens.',
          buttonNeutral: 'Perguntar-me Depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const checkIsLocationEnabled: boolean = await isLocationEnabled();
        if (checkIsLocationEnabled) {
          loadAppScreen(user ? true : false, true);
        } else {
          try {
            if (Platform.OS === "android") {
              await promptForEnableLocationIfNeeded();
            }
            loadAppScreen(user ? true : false, true);
          } catch {
            loadAppScreen(user ? true : false, false);
          }
        }
      } else {
        loadAppScreen(user ? true : false, false);
      }
    } catch {
      loadAppScreen(user ? true : false, false);
    }
  }

  function loadAppScreen(hasUser: boolean, grantedPermissions: boolean) {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: hasUser
              ? grantedPermissions
                ? 'HomeTabsScreen'
                : 'PermissionsErrorScreen'
              : 'WelcomeScreen',
          },
        ],
      });
    }, 1000);
  }

  return (
    <ScreenView>
      <LottieLogoViewAnimation
        source={UberLogoAnimation}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => requestPermissionsAndCheckGPS()}
      />
    </ScreenView>
  );
}
