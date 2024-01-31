import * as React from 'react';

import {AuthProvider} from './src/hooks/authentication';

import AppRoutes from './src/routes/app.routes';

export default function App(): React.ReactElement {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
