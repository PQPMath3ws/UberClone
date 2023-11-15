import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export const ScreenView = styled.View`
  background-color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LottieLogoViewAnimation = styled(LottieView)`
  width: ${Math.floor(width / 4.8)}px;
  height: ${Math.floor(width / 4.8)}px;
`;
