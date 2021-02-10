import React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Board } from 'domains/game/components/Board';
import { Intro } from 'domains/game/components/Intro';
import type { RootStackParamList } from 'screens/types';

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: GameScreenNavigationProp;
};

export const Game = ({ navigation }: Props) => {
  const navigateHome = () => {
    navigation.navigate('Home');
  };

  // return <Intro />;
  return <Board onGoHome={navigateHome} />;
};
