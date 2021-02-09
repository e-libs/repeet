import React from 'react';
import { Image, Dimensions } from 'react-native';

export const Logo = () => {
  const width = Dimensions.get('window').width - 40;
  const height = Math.round((width * 9) / 16);

  return (
    <Image
      resizeMode="contain"
      source={require('assets/images/logo.png')}
      style={{ width, height }}
    />
  );
};
