import vehicle_placeholder from '../../assets/images/vehicle_placeholder.svg';

import {
  AddressText,
  ComponentLeftSideView,
  ComponentRightSideView,
  ComponentView,
  SecondaryRightText,
  UberVehicle,
} from './styles';

export default function TripInfoCard({
  address,
  date,
  price,
}: {
  address: string;
  date: string;
  price: string;
}) {
  return (
    <ComponentView>
      <ComponentLeftSideView>
        <UberVehicle image={vehicle_placeholder} />
      </ComponentLeftSideView>
      <ComponentRightSideView>
        <AddressText>{address}</AddressText>
        <SecondaryRightText>{date}</SecondaryRightText>
        <SecondaryRightText>R$ {price}</SecondaryRightText>
      </ComponentRightSideView>
    </ComponentView>
  );
}
