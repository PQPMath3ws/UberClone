import * as React from 'react';
import {ComponentIcon, ComponentText, ComponentView} from './styles';

export default function ActionButtonCard({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <ComponentView>
      <ComponentIcon name={icon} />
      <ComponentText>{text}</ComponentText>
    </ComponentView>
  );
}
