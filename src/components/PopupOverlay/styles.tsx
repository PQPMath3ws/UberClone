import {Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import {SizeConfig} from '../../assets/config/SizeConfig';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

if (width > height) {
  new SizeConfig(height, width);
} else {
  new SizeConfig(width, height);
}

export const OverlayView = styled.View<{isVisible: boolean}>`
  display: ${props => props.isVisible ? "block" : "none"};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000006f;
  align-items: center;
  justify-content: center;
`;

export const ContainerView = styled.View`
  background-color: #ffffff;
  width: 85%;
  padding: 5%;
  border-radius: 20px;
`;

export const HeaderText = styled.Text`
  color: #aaaaaa;
  font-family: 'UberMove-Medium';
  font-size: ${Math.floor((width / 100) * 3.3)}px;
`;

export const NumberView = styled.View`
  margin-top: 5%;
  flex-direction: row;
  align-items: center;
`;

export const PhoneIcon = styled(FontAwesome)`
  color: #ffffff;
  background-color: #e5e5e5;
  padding: ${Math.floor((width / 100) * 2.5)}px;
  border-radius: ${Math.floor((width / 100) * 2.5)}px;
  font-size: ${Math.floor((width / 100) * 3.5)}px;
`;

export const NumberText = styled.Text`
  margin-left: 5%;
  color: #d5d5d5;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor((width / 100) * 4)}px;
`;

export const ConfirmationText = styled.Text`
  margin-top: 5%;
  color: #aaaaaa;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor((width / 100) * 3.5)}px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  width: 100%;
  margin-top: 5%;
`;

export const PopupButtonAction = styled.TouchableOpacity<{
  color: string;
}>`
  background-color: ${props => props.color};
  width: 48%;
  border-radius: ${Math.floor((height / 100) * 1)}px;
  height: ${Math.floor((height / 100) * 3.5)}px;
  justify-content: center;
  align-items: center;
`;

export const PopupButtonActionText = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor((width / 100) * 3.5)}px;
`;
