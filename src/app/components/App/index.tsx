import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { Sample } from 'app/components/Sample';
import { MainView } from 'app/components/App/styles';

export default function App() {
  return (
    <Provider store={store}>
      <MainView color="#FFF">
        <Text>Repeet</Text>
        <Sample />
      </MainView>
    </Provider>
  );
}
