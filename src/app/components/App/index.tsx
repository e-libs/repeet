import React from 'react';
import { Text, Image } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from 'app/store';
import { Sample } from 'app/components/Sample';
import { MainView } from 'app/components/App/styles';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainView color="#FFF">
          <Image
            resizeMode="contain"
            source={require('assets/images/logo.png')}
            style={{ width: 350, height: 120 }}
          />
          <Text>Repeet</Text>
          <Sample />
        </MainView>
      </PersistGate>
    </Provider>
  );
}
