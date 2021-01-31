import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { x } from 'app/components/App/constants';
import { store } from 'app/store';
import { Sample } from 'app/components/Sample';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app...{x}</Text>
        <Sample />
      </View>
    </Provider>
  );
}
