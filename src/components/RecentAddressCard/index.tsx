import * as React from 'react';

import {
  CenterComponentAddressText1,
  CenterComponentAddressText2,
  CenterComponentItem,
  ComponentView,
  LeftComponentIcon,
  LeftComponentItem,
  RightComponentIcon,
  RightComponentItem,
} from './styles';

export default function RecentAddressCard({
  line1Text,
  line2Text,
}: {
  line1Text: string;
  line2Text: string;
}) {
  return (
    <ComponentView>
      <LeftComponentItem>
        <LeftComponentIcon name="location-pin" />
      </LeftComponentItem>
      <CenterComponentItem>
        <CenterComponentAddressText1>{line1Text}</CenterComponentAddressText1>
        <CenterComponentAddressText2>{line2Text}</CenterComponentAddressText2>
      </CenterComponentItem>
      <RightComponentItem>
        <RightComponentIcon name="keyboard-arrow-right" />
      </RightComponentItem>
    </ComponentView>
  );
}
