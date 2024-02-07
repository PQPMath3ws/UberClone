import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';

import RecentAddressCard from '../../../components/RecentAddressCard';

import {
  ScreenContainer,
  ScreenView,
  SearchBarIcon,
  SearchBarItem,
  SearchBarItemLeft,
  SearchBarItemRight,
  SearchBarText,
  TravelsRecentListView,
  TravelTimeIcon1,
  TravelTimeIcon2,
  TravelTimeItemBar,
  TravelTimeText,
  UberText,
} from './styles';

export default function HomeTabScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'HomeTabScreen'>;
}): React.ReactElement {
  function changeScreen(screen: string) {
    navigation.navigate(screen);
  }

  return (
    <ScreenView>
      <ScreenContainer>
        <UberText>Uber</UberText>
        <SearchBarItem>
          <SearchBarItemLeft onPress={() => changeScreen("TripSelectionScreen")}>
            <SearchBarIcon name="search" />
            <SearchBarText>Inserir local de partida</SearchBarText>
          </SearchBarItemLeft>
          <SearchBarItemRight>
            <TravelTimeItemBar>
              <TravelTimeIcon1 name="time" />
              <TravelTimeText>Agora</TravelTimeText>
              <TravelTimeIcon2 name="keyboard-arrow-down" />
            </TravelTimeItemBar>
          </SearchBarItemRight>
        </SearchBarItem>
        <TravelsRecentListView>
          <RecentAddressCard
            line1Text="Endereço Qualquer"
            line2Text="Localizado em lugar nenhum"
          />
          <RecentAddressCard
            line1Text="Clube da Luta"
            line2Text="Ninguém fala sobre o clube da luta"
          />
          <RecentAddressCard
            line1Text="Casa da Mãe Joana"
            line2Text="Mas que desordem está esse lugar, em?"
          />
          <RecentAddressCard
            line1Text="React Native"
            line2Text="O que é isso? É de comer? É de beber?"
          />
          <RecentAddressCard
            line1Text="Hello Darkness"
            line2Text="My old friend, I've come to talk with you again."
          />
        </TravelsRecentListView>
      </ScreenContainer>
    </ScreenView>
  );
}
