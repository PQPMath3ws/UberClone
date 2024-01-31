import * as React from 'react';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  AntDesignIcon,
  Container,
  MessageText,
  NextButton,
  NextButtonText,
  ScreenView,
  UberSafety,
  UberText,
} from './styles';

import uber_safety from '../../assets/images/welcome_safety.svg';

function loadNextScreen(
  navigation: NativeStackNavigationProp<ParamListBase, 'WelcomeScreen'>,
) {
  navigation.reset({
    index: 0,
    routes: [
      {
        name: 'LoginScreen',
      },
    ],
  });
}

export default function WelcomeScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'WelcomeScreen'>;
}): React.ReactElement {
  return (
    <ScreenView>
      <Container>
        <UberText>Uber</UberText>
        <UberSafety image={uber_safety} />
        <MessageText>Viaje com segurança</MessageText>
      </Container>
      <NextButton onPress={() => loadNextScreen(navigation)}>
        <NextButtonText>Avançar</NextButtonText>
        <AntDesignIcon name="arrowright"></AntDesignIcon>
      </NextButton>
    </ScreenView>
  );
}
