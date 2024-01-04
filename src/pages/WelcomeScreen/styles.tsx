import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {Dimensions} from 'react-native';
import { SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

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
  font-size: ${Math.floor(width / 12)}px;
`;

export function UberSafety({image}: {image: React.FC<SvgProps>}): React.JSX.Element {
  const Image = image;
  return <Image width={Math.floor(height / 5.5)} height={Math.floor(height / 5.5)} />
}

export const MessageText = styled.Text`
  color: #ffffff;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor(width / 14)}px;
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: ${Math.floor(height / 20)}px;
  border-radius: 10px;
`;

export const NextButtonText = styled.Text`
  color: #ffffff;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor(width / 28)}px;
`;

export const AntDesignIcon = styled(AntDesign)`
  position: absolute;
  right: 14px;
  color: #ffffff;
  font-size: ${Math.floor(width / 22)}px;
`;
