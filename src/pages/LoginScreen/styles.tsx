import {Dimensions} from 'react-native';
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
  align-items: center;
`;

export const Container = styled.View`
  margin-top: 30px;
  width: 90%;
`;

export const QuestionText1 = styled.Text`
  color: #000000;
  font-family: 'UberMoveText-Medium';
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 4.5)}px;
`;

export const NumberInput = styled.TextInput`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-color: #000000;
  border-width: 2px;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 4.5)}px;
  color: #727272;
  padding: 0px 12px;
`;

export const NextButton = styled.TouchableOpacity`
  margin-top: 30px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${Math.floor(SizeConfig.heightMultiplier * 5.5)}px;
  border-radius: 10px;
`;

export const NextButtonText = styled.Text`
  color: #ffffff;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 4)}px;
`;

export const HorizontalLineSeparator = styled.View`
  margin-top: 40px;
  border-color: #e8e8e8;
  border-width: 1px;
`;

export const RulesAgreeText = styled.Text`
  margin-top: 30px;
  color: #a6a6a6;
  font-family: 'UberMoveText-Regular';
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 3.5)}px;
`;
