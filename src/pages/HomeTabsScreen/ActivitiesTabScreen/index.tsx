import * as React from 'react';

import TripInfoCard from '../../../components/TripInfoCard';

import {
  ActivityContentView,
  ActivityText,
  ScreenContainer,
  ScreenView,
} from './styles';

export default function ActivitiesTabScreen(): React.ReactElement {
  return (
    <ScreenView>
      <ScreenContainer>
        <ActivityText>Atividade</ActivityText>
        <ActivityContentView>
          <TripInfoCard address="Endereço Qualquer" date="01 de jan - 10:00" price='10,80' />
          <TripInfoCard address="Clube da Luta" date="24 de dez - 20:00" price='25,45' />
          <TripInfoCard address="Casa da Mãe Joana" date="24 de nov - 20:35" price='30,00' />
          <TripInfoCard address="React Native" date="01 de out - 00:00" price='14,60' />
          <TripInfoCard address="Hello Darkness" date="15 de set - 12:46" price='11,25' />
        </ActivityContentView>
      </ScreenContainer>
    </ScreenView>
  );
}
