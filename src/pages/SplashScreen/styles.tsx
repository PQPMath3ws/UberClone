import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {Dimensions} from 'react-native';

import {SizeConfig} from '../../assets/config/SizeConfig';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

if (width > height) {
  new SizeConfig(height, width);
}
else {
  new SizeConfig(width, height);
}

export const ScreenView = styled.View`
  background-color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LottieLogoViewAnimation = styled(LottieView)`
  width: ${Math.floor(SizeConfig.widthMultiplier * 20)}px;
  height: ${Math.floor(SizeConfig.widthMultiplier * 20)}px;
`;
