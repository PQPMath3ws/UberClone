import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {SizeConfig} from '../../assets/config/SizeConfig';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const ComponentView = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ComponentLeftSideView = styled.View``;

export function UberVehicle({
  image,
}: {
  image: React.FC<SvgProps>;
}): React.JSX.Element {
  const Image = image;
  const imageSize = Math.floor(SizeConfig.heightMultiplier * 8);
  const style = {
    backgroundColor: "#e9e9e9",
    borderRadius: 20,
  };
  return <Image width={imageSize} height={imageSize} style={style} />;
}

export const ComponentRightSideView = styled.View`
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const AddressText = styled.Text`
  color: #000000;
  font-size: ${Math.floor((width / 100) * 3.5)}px;
  font-family: 'UberMoveText-Medium';
`;

export const SecondaryRightText = styled.Text`
  color: #5b5b5b;
  font-size: ${Math.floor((width / 100) * 3.5)}px;
  font-family: 'UberMoveText-Regular';
`;
