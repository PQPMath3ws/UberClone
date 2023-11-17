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

export const HeaderView = styled.View`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  margin-top: ${Math.floor((height / 100) * 2.5)}px;
`;

export const LeftHeaderItemView = styled.View`
  width: 80%;
  height: 100%;
`;

export const UserNameHeaderText = styled.Text`
  color: #000000;
  font-family: 'UberMove-Bold';
  font-size: ${Math.floor((width / 100) * 7.5)}px;
`;

export const UserNoteHeaderViewItem = styled.View`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-top: ${Math.floor((height / 100) * 1.5)}px;
  align-items: center;
  padding: 6px;
  border-radius: 10px;
`;

export const UserNoteIconHeaderItem = styled(MaterialIcons)`
  color: #5c5c5c;
  font-size: ${Math.floor((width / 100) * 4)}px;
`;

export const UserNoteTextHeaderItem = styled.Text`
  color: #5c5c5c;
  font-family: 'UberMove-Medium';
  font-size: ${Math.floor((width / 100) * 3.5)}px;
  margin-left: ${Math.floor((width / 100) * 1.2)}px;
`;

export const RightHeaderItemView = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const PseudoImageHeaderItem = styled.View`
  width: ${Math.floor((width / 100) * 16)}px;
  height: ${Math.floor((width / 100) * 16)}px;
  border-radius: ${Math.floor((width / 100) * 10)}px;
  background-color: #993030;
`;

export const ActionsViewItem = styled.View`
  width: 100%;
  margin-top: ${Math.floor((height / 100) * 4.5)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreditsUberView = styled.View`
  width: 100%;
  height: ${Math.floor((height / 100) * 6.5)}px;
  background-color: #f3f3f3;
  margin-top: ${Math.floor((height / 100) * 2.5)}px;
  border-radius: ${Math.floor((height / 100) * 2)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

export const CreditsUberText1 = styled.Text`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 3.5)}px;
  font-family: 'UberMove-Medium';
`;

export const CreditsUberText2 = styled.Text`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 4.5)}px;
  font-family: 'UberMove-Bold';
`;

export const OptionsListView = styled.View`
  margin-left: 10px;
  margin-top: ${Math.floor((width / 100) * 5.5)}px;
  gap: 32px;
`;

export const OptionView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const OptionIcon = styled(MaterialIcons)`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 5.5)}px;
`;

export const OptionText = styled.Text`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 4)}px;
  font-family: 'UberMove-Medium';
`;

export const VersionAppText = styled.Text`
  color: #7c7c7c;
  font-size: ${Math.floor((width / 100) * 3.5)}px;
  font-family: 'UberMove-Medium';
  margin-top: ${Math.floor((width / 100) * 7.5)}px;
  margin-left: ${Math.floor((width / 100) * 6.5)}px;
`;
