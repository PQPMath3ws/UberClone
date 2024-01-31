import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const ScreenView = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ScreenContainer = styled.View`
  width: 90%;
`;

export const ActivityText = styled.Text`
  color: #000000;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor(width / 12)}px;
  margin-top: ${Math.floor((height / 100) * 1.5)}px;
`;

export const ActivityContentView = styled.View`
  margin-top: ${Math.floor((height / 100) * 3.5)}px;
  gap: 30px;
`;