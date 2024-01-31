import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
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

export const ComponentView = styled.View`
  width: 30%;
  height: ${Math.floor((width / 100) * 22)}px;
  background-color: #f3f3f3;
  border-radius: ${Math.floor((width / 100) * 2)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComponentIcon = styled(MaterialCommunityIcons)`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 6)}px;
`;

export const ComponentText = styled.Text`
  color: #000000;
  margin-top: ${Math.floor((width / 100) * 2)}px;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor((width / 100) * 3.3)}px;
`;
