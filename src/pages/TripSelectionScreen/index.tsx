import Geolocation from '@react-native-community/geolocation';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {Platform} from 'react-native';
import {promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';
import GooglePlacesSDK, {
  LatLng,
  PlacePrediction,
} from 'react-native-google-places-sdk';

import {
  AddressHeaderView,
  AddressInput,
  AddressText,
  AntDesignIcon,
  BackButton,
  ContentView,
  HeaderView,
  LocationIcon,
  MapViewComponent,
  ScreenView,
  SearchAddressesItemLeftView,
  SearchAddressesItemRightView,
  SearchAddressesItemView,
  SearchAddressesView,
} from './styles';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface GeolocalizationType {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MarkersGeolocalizationType {
  title: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export default function TripSelectionScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'TripSelectionScreen'>;
}) {
  const [getOnce, setGetOnce] = React.useState<boolean>(false);
  const [geolocalizationData, setGeolocalizationData] =
    React.useState<GeolocalizationType>({
      latitude: -10.3,
      longitude: -53.2,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
    });
  const [inputFocused, setInputFocused] = React.useState([false, false]);
  const [inputsValues, setInputsValues] = React.useState(['', '']);
  const [resultAddress, setResultAddress] = React.useState<
    PlacePrediction[] | null
  >(null);
  const [markersAddresses, setMarkersAddresses] = React.useState<
    MarkersGeolocalizationType[]
  >([
    {title: '', description: '', coordinates: {latitude: 0, longitude: 0}},
    {title: '', description: '', coordinates: {latitude: 0, longitude: 0}},
  ]);

  const mapRef = React.useRef<MapView>(null);

  function goBackToScreen() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  async function getAddressByText(address: string) {
    try {
      const result = await GooglePlacesSDK.fetchPredictions(address);
      setResultAddress(result);
    } catch {
      setResultAddress(null);
      setInputFocused([false, false]);
    }
  }

  async function setInputAddress(item: PlacePrediction) {
    try {
      const result = await GooglePlacesSDK.fetchPlaceByID(item.placeID);

      const marker: MarkersGeolocalizationType = {
        title: item.primaryText,
        description: item.description,
        coordinates: {
          latitude: result.coordinate!.latitude,
          longitude: result.coordinate!.longitude,
        },
      };

      if (inputFocused[0]) {
        setInputsValues([item.description, inputsValues[1]]);
        setMarkersAddresses([marker, markersAddresses[1]]);
      } else {
        setInputsValues([inputsValues[0], item.description]);
        setMarkersAddresses([markersAddresses[0], marker]);
      }

      setResultAddress(null);
    } catch {
      setResultAddress(null);
    }
  }

  async function getActualLocalization() {
    try {
      if (Platform.OS === 'android') {
        await promptForEnableLocationIfNeeded();
      }
      Geolocation.getCurrentPosition(
        position => {
          setGeolocalizationData({
            ...geolocalizationData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          goBackToScreen();
        },
        {
          timeout: 60000,
        },
      );
    } catch {
      goBackToScreen();
    }
  }

  function fitToCoordinates() {
    const coordinates: LatLng[] = markersAddresses.map(markerAddress => {
      if (
        markerAddress.title &&
        markerAddress.description &&
        markerAddress.coordinates.latitude &&
        markerAddress.coordinates.longitude
      ) {
        return {
          latitude: markerAddress.coordinates.latitude,
          longitude: markerAddress.coordinates.longitude,
        };
      } else {
        return {
          latitude: geolocalizationData.latitude,
          longitude: geolocalizationData.longitude,
        };
      }
    });

    mapRef.current?.fitToCoordinates(coordinates, {
      animated: true,
    });
  }

  React.useEffect(() => {
    if (!getOnce) {
      getActualLocalization();
      setGetOnce(true);
    }
    if (getOnce) {
      fitToCoordinates();
    }
  }, [markersAddresses]);

  return (
    <ScreenView>
      <HeaderView>
        <BackButton onPress={() => goBackToScreen()}>
          <AntDesignIcon name="arrowleft" />
        </BackButton>
        <AddressHeaderView>
          <AddressInput
            focused={inputFocused[0]}
            value={inputsValues[0]}
            blurOnSubmit={false}
            onChangeText={text => setInputsValues([text, inputsValues[1]])}
            onFocus={() => {
              setInputFocused([true, false]);
              setResultAddress(null);
            }}
            onSubmitEditing={() => getAddressByText(inputsValues[0])}
          />
          <AddressInput
            focused={inputFocused[1]}
            value={inputsValues[1]}
            blurOnSubmit={false}
            onChangeText={text => setInputsValues([inputsValues[0], text])}
            onFocus={() => {
              setInputFocused([false, true]);
              setResultAddress(null);
            }}
            onSubmitEditing={() => getAddressByText(inputsValues[1])}
          />
        </AddressHeaderView>
      </HeaderView>
      <ContentView>
        <MapViewComponent ref={mapRef} region={geolocalizationData}>
          {markersAddresses.map((marker, index) =>
            marker.title &&
            marker.description &&
            marker.coordinates.latitude &&
            marker.coordinates.longitude ? (
              <Marker
                key={index}
                title={marker.title}
                description={marker.description}
                coordinate={marker.coordinates}
              />
            ) : null,
          )}
          {markersAddresses[0].title &&
            markersAddresses[0].description &&
            markersAddresses[0].coordinates.latitude &&
            markersAddresses[0].coordinates.longitude &&
            markersAddresses[1].title &&
            markersAddresses[1].description &&
            markersAddresses[1].coordinates.latitude &&
            markersAddresses[1].coordinates.longitude && (
              <MapViewDirections
                origin={markersAddresses[0].coordinates}
                destination={markersAddresses[1].coordinates}
                strokeWidth={5}
                strokeColor="#000000"
                apikey='key'
              />
            )}
        </MapViewComponent>
        {(inputFocused[0] || inputFocused[1]) && resultAddress && (
          <SearchAddressesView
            contentContainerStyle={{alignItems: 'center', gap: 20}}>
            {resultAddress &&
              resultAddress.map((item, index) => (
                <SearchAddressesItemView
                  key={index}
                  onPress={() => setInputAddress(item)}>
                  <SearchAddressesItemLeftView>
                    <LocationIcon name="enviroment" />
                  </SearchAddressesItemLeftView>
                  <SearchAddressesItemRightView>
                    <AddressText isBold={true}>{item.primaryText}</AddressText>
                    <AddressText isBold={false}>{item.description}</AddressText>
                  </SearchAddressesItemRightView>
                </SearchAddressesItemView>
              ))}
          </SearchAddressesView>
        )}
      </ContentView>
    </ScreenView>
  );
}
