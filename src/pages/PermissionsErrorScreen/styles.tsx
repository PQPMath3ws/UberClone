import {Dimensions} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styled from 'styled-components/native';

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
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FontAwesomeIcon = styled(FontAwesome)`
  color: #000000;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 12)}px;
`;

export const ErrorText = styled.Text`
  color: #000000;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 5)}px;
  font-family: "UberMove-Bold";
`;

export const MessageText = styled.Text`
  color: #aaaaaa;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 4.5)}px;
  font-family: "UberMove-Regular";
  width: 75%;
  text-align: center;
`;

export const RetryButton = styled.TouchableOpacity`
  background-color: #000000;
  width: 80%;
  border-radius: 10px;
  height: ${Math.floor(SizeConfig.heightMultiplier * 6)}px;
  justify-content: center;
  align-items: center;
`;

export const RetryButtonText = styled.Text`
  color: #ffffff;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 4.5)}px;
  font-family: "UberMove-Bold";
`;


