import React from 'react';

import {
  ButtonsView,
  ConfirmationText,
  ContainerView,
  HeaderText,
  NumberText,
  NumberView,
  OverlayView,
  PhoneIcon,
  PopupButtonAction,
  PopupButtonActionText,
} from './styles';

export default function PopupOverlay({
  number,
  isVisible,
  setIsVisible,
  callback
}: {
  number: string;
  isVisible: boolean;
  setIsVisible: Function;
  callback: Function;
}): React.ReactElement {
  return (
    <OverlayView isVisible={isVisible}>
      <ContainerView>
        <HeaderText>O número digitado foi:</HeaderText>
        <NumberView>
          <PhoneIcon name="phone"></PhoneIcon>
          <NumberText>{number}</NumberText>
        </NumberView>
        <ConfirmationText>Está correto?</ConfirmationText>
        <ButtonsView>
          <PopupButtonAction color="#ffffff" onPress={() => setIsVisible(false)}>
            <PopupButtonActionText color="#000000">Não</PopupButtonActionText>
          </PopupButtonAction>
          <PopupButtonAction color="#000000" onPress={() => callback()}>
            <PopupButtonActionText color="#ffffff">Sim</PopupButtonActionText>
          </PopupButtonAction>
        </ButtonsView>
      </ContainerView>
    </OverlayView>
  );
}
