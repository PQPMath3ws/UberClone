import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {SizeConfig} from '../../assets/config/SizeConfig';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

if (width > height) {
  new SizeConfig(height, width);
} else {
  new SizeConfig(width, height);
}

export const ScreenView = styled.View`
  background-color: #ffffff;
  width: ${width}px;
  height: ${height}px;
`;

export const HeaderView = styled.View`
  width: 100%;
  height: 15%;
  box-sizing: border-box;
  border-bottom: 10px solid #000000;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 14px;
  width: ${Math.floor(SizeConfig.widthMultiplier * 5.5)}px;
`;

export const AntDesignIcon = styled(AntDesign)`
  color: #000000;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 5.5)}px;
`;

export const AddressHeaderView = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const AddressInput = styled.TextInput<{focused: boolean}>`
  width: 92%;
  padding: 0px 12px;
  background-color: ${props => props.focused ? "#e8e8e8" : "#f3f3f3"};
  height: ${Math.floor(SizeConfig.heightMultiplier * 3.5)}px;
  border-radius: 6px;
  color: #000000;
  font-family: "UberMove-Medium";
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 4)}px;
`;

export const ContentView = styled.View`
  position: relative;
  width: 100%;
  height: 85%;
`;

export const MapViewComponent = styled(MapView)`
  width: 100%;
  height: 96%;
`;

export const SearchAddressesView = styled.ScrollView`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  background-color: #fafafa;
`
export const SearchAddressesItemView = styled.TouchableOpacity`
  width: 92%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const SearchAddressesItemLeftView = styled.View`
  width: 8%;
`;

export const SearchAddressesItemRightView = styled.View`
  width: 92%;
`;

export const LocationIcon = styled(AntDesign)`
  width: ${Math.floor(SizeConfig.widthMultiplier * 3.5)}px;
  color: #000000;
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 3.5)}px;
`;

export const AddressText = styled.Text<{isBold: boolean}>`
  color: #000000;
  font-family: ${props => props.isBold ? "UberMove-Bold" : "UberMove-Medium"};
  font-size: ${Math.floor(SizeConfig.widthMultiplier * 3.5)}px;
`
