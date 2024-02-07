import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

export const UberText = styled.Text`
  color: #000000;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor(width / 12)}px;
  margin-top: ${Math.floor((height / 100) * 1.5)}px;
`;

export const SearchBarItem = styled.TouchableOpacity`
  background-color: #e8e8e8;
  margin-top: ${Math.floor((height / 100) * 2.5)}px;
  height: ${Math.floor((height / 100) * 5.5)}px;
  width: 100%;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchBarItemLeft = styled.TouchableOpacity`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right-color: #ffffff;
  border-right-width: 1px;
`;

export const SearchBarItemRight = styled.View`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SearchBarIcon = styled(Ionicons)`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 5.5)}px;
  margin-left: 14px;
`;

export const SearchBarText = styled.Text`
  color: #4d4d4d;
  font-family: 'UberMove-Medium';
  font-size: ${Math.floor((width / 100) * 4)}px;
  margin-left: 10px;
`;

export const TravelTimeItemBar = styled.View`
  background-color: #ffffff;
  width: 75%;
  height: 60%;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TravelTimeIcon1 = styled(Ionicons)`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 5.5)}px;
  margin-left: 14px;
`;

export const TravelTimeText = styled.Text`
  color: #000000;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor((width / 100) * 3.5)}px;
  margin-left: ${Math.floor((width / 100) * 2.2)}px;
`;

export const TravelTimeIcon2 = styled(MaterialIcons)`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 4.5)}px;
  margin-left: ${Math.floor((width / 100) * 2.2)}px;
  margin-right: ${Math.floor((width / 100) * 2.2)}px;
`;

export const TravelsRecentListView = styled.View`
  width: 100%;
  gap: 20px;
  align-items: center;
  margin-top: ${Math.floor((height / 100) * 2.5)}px;
`;
