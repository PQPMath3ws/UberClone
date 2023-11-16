import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const ComponentView = styled.View`
  width: 98%;
  height: ${Math.floor((height / 100) * 6)}px;
  display: flex;
  flex-direction: row;
`;

export const LeftComponentItem = styled.View`
  width: 15%;
  height: 100%;
  justify-content: center;
`;

export const LeftComponentIcon = styled(MaterialIcons)`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 6)}px;
  width: ${Math.floor((width / 100) * 10)}px;
  height: ${Math.floor((width / 100) * 10)}px;
  background-color: #e8e8e8;
  text-align: center;
  vertical-align: middle;
  border-radius: ${Math.floor((width / 100) * 5)}px;
`;

export const CenterComponentItem = styled.View`
  width: 70%;
  height: 100%;
  justify-content: center;
  gap: 2px;
  margin-left: 2px;
`;

export const CenterComponentAddressText1 = styled.Text`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 4)}px;
  font-family: 'UberMoveText-Medium';
`;

export const CenterComponentAddressText2 = styled.Text`
  color: #5b5b5b;
  font-size: ${Math.floor((width / 100) * 3.5)}px;
  font-family: 'UberMoveText-Regular';
`;

export const RightComponentItem = styled.View`
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const RightComponentIcon = styled(MaterialIcons)`
  color: #a8a8a8;
  font-size: ${Math.floor((width / 100) * 6)}px;
`;
