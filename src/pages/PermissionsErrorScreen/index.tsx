import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  ErrorText,
  FontAwesomeIcon,
  MessageText,
  RetryButton,
  RetryButtonText,
  ScreenView,
} from './styles';

export default function PermissionsErrorScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    ParamListBase,
    'PermissionsErrorScreen'
  >;
}) {
  function loadAppScreen() {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'SplashScreen',
          },
        ],
      });
    }, 300);
  }

  return (
    <ScreenView>
      <FontAwesomeIcon name="warning" />
      <ErrorText>Erro ao obter perrmissões do app.</ErrorText>
      <MessageText>
        Você precisa habilitar todas as permissões solicitadas para o melhor
        functionamento do aplicativo. Repita o processo ou libere a localização
        nas configurações.
      </MessageText>
      <RetryButton onPress={() => loadAppScreen()}>
        <RetryButtonText>Repetir</RetryButtonText>
      </RetryButton>
    </ScreenView>
  );
}
