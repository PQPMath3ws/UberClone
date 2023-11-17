import * as React from 'react';

import {
  ActionsViewItem,
  CreditsUberText1,
  CreditsUberText2,
  CreditsUberView,
  HeaderView,
  LeftHeaderItemView,
  OptionIcon,
  OptionText,
  OptionView,
  OptionsListView,
  PseudoImageHeaderItem,
  RightHeaderItemView,
  ScreenContainer,
  ScreenView,
  UserNameHeaderText,
  UserNoteHeaderViewItem,
  UserNoteIconHeaderItem,
  UserNoteTextHeaderItem,
  VersionAppText,
} from './styles';

import ActionButtonCard from '../../../components/ActionButtonCard';

export default function AccountTabScreen(): React.ReactElement {
  return (
    <ScreenView>
      <ScreenContainer>
        <HeaderView>
          <LeftHeaderItemView>
            <UserNameHeaderText>
              Irineu, você não sabe? Nem eu!
            </UserNameHeaderText>
            <UserNoteHeaderViewItem>
              <UserNoteIconHeaderItem name="star" />
              <UserNoteTextHeaderItem>4.81</UserNoteTextHeaderItem>
            </UserNoteHeaderViewItem>
          </LeftHeaderItemView>
          <RightHeaderItemView>
            <PseudoImageHeaderItem />
          </RightHeaderItemView>
        </HeaderView>
        <ActionsViewItem>
          <ActionButtonCard icon="lifebuoy" text="Ajuda" />
          <ActionButtonCard icon="briefcase-variant" text="Repasse de ganhos" />
          <ActionButtonCard icon="clock" text="Viajens" />
        </ActionsViewItem>
        <CreditsUberView>
          <CreditsUberText1>Créditos Uber</CreditsUberText1>
          <CreditsUberText2>R$ 10,00</CreditsUberText2>
        </CreditsUberView>
        <OptionsListView>
          <OptionView>
            <OptionIcon name="settings" />
            <OptionText>Opções</OptionText>
          </OptionView>
          <OptionView>
            <OptionIcon name="message" />
            <OptionText>Mensagens</OptionText>
          </OptionView>
          <OptionView>
            <OptionIcon name="wallet-giftcard" />
            <OptionText>Presentes</OptionText>
          </OptionView>
          <OptionView>
            <OptionIcon name="info" />
            <OptionText>Jurídico</OptionText>
          </OptionView>
        </OptionsListView>
        <VersionAppText>v1.001.10001</VersionAppText>
      </ScreenContainer>
    </ScreenView>
  );
}
