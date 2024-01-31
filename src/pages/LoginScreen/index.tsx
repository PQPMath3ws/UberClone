import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase} from '@react-navigation/native';
import * as React from 'react';
import {Keyboard} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import PopupOverlay from '../../components/PopupOverlay';

import {UserDTO} from '../../dtos/user';

import {useAuth} from '../../hooks/authentication';

import {
  Container,
  HorizontalLineSeparator,
  NextButton,
  NextButtonText,
  NumberInput,
  QuestionText1,
  RulesAgreeText,
  ScreenView,
} from './styles';

export default function LoginScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'LoginScreen'>;
}) {
  const [number, setNumber] = React.useState('');
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  const {setUser} = useAuth();

  function showPopup() {
    Keyboard.dismiss();
    setTimeout(() => {
      setOverlayVisible(true);
    }, 300);
  }

  async function saveUserAndRefresh() {
    const userInfo = {
      number,
      type:
        number === '11111111111'
          ? 'root'
          : number === '00000000000'
            ? 'driver'
            : 'client',
      loggedInAt: new Date(),
    } as UserDTO;

    const user_key = 'user_info';

    await AsyncStorage.setItem(user_key, JSON.stringify(userInfo));

    setUser(userInfo);

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'SplashScreen',
        },
      ],
    });
  }

  return (
    <ScreenView>
      <Container>
        <QuestionText1>Digite seu número de celular</QuestionText1>
        <NumberInput
          keyboardType="number-pad"
          value={number}
          onChangeText={text => setNumber(text)}></NumberInput>
        <NextButton onPress={() => (number ? showPopup() : null)}>
          <NextButtonText>Continuar</NextButtonText>
        </NextButton>
        <HorizontalLineSeparator />
        <RulesAgreeText>
          Ao continuar, você concorda em receber chamadas e mensagens SMS ou
          pelo WhatsApp, inclusive automáticas, da Uber e de suas afiliadas, no
          número informado.
        </RulesAgreeText>
      </Container>
      <PopupOverlay
        number={number}
        isVisible={overlayVisible}
        setIsVisible={setOverlayVisible}
        callback={() => saveUserAndRefresh()}
      />
    </ScreenView>
  );
}
