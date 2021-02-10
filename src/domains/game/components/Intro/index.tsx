import React from 'react';
import { Text, View } from 'react-native';

type IntroProps = {
  secondsLeft: number;
};

export const Intro = ({ secondsLeft }: IntroProps) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Starting in {secondsLeft}</Text>
  </View>
);
