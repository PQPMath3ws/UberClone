import * as React from 'react';

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

import RecentAddressCard from '../../../components/RecentAddressCard';

export default function HomeTabScreen(): React.ReactElement {
  return (
    <ScreenView>
      <ScreenContainer>
        <UberText>Uber</UberText>
        <SearchBarItem>
          <SearchBarItemLeft>
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
