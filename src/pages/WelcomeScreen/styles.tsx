import React from 'react';
import {Dimensions} from 'react-native';
import {SvgProps} from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  background-color: #256bef;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Container = styled.View`
  margin-top: 20%;
  align-items: center;
  gap: 90px;
`;

export const UberText = styled.Text`
  color: #ffffff;
  font-family: 'UberMove-Medium';
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 8.5)}px;
`;

export function UberSafety({image}: {image: React.FC<SvgProps>}): React.JSX.Element {
  const Image = image;
  const imageSize = Math.floor(SizeConfig.heightMultiplier * 18);
  return <Image width={imageSize} height={imageSize} />
}

export const MessageText = styled.Text`
  color: #ffffff;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 7)}px;
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: ${Math.floor(SizeConfig.heightMultiplier * 5)}px;
  border-radius: 10px;
`;

export const NextButtonText = styled.Text`
  color: #ffffff;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 4)}px;
`;

export const AntDesignIcon = styled(AntDesign)`
  position: absolute;
  right: 14px;
  color: #ffffff;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 5)}px;
`;
