import React from 'react';
import { Text, View } from 'react-native';

export const Intro = () => {
  console.log('intro...');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Intro</Text>
    </View>
  );
};
