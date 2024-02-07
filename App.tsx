import * as React from 'react';
import GooglePlacesSDK from 'react-native-google-places-sdk';
import {enableLatestRenderer} from 'react-native-maps';

import {AuthProvider} from './src/hooks/authentication';

import AppRoutes from './src/routes/app.routes';

enableLatestRenderer();

export default function App(): React.ReactElement {
  const GOOGLE_PLACES_API_KEY = "key";

  GooglePlacesSDK.initialize(GOOGLE_PLACES_API_KEY);

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
