import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';
import Screens from 'screens/index';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Screens />
      </PersistGate>
    </Provider>
  );
}
