import React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Board } from 'domains/game/components/Board';
import { Intro } from 'domains/game/components/Intro';
import type { RootStackParamList } from 'screens/types';
import { useStatus } from 'domains/game/data/hooks/useStatus';

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: GameScreenNavigationProp;
};

export const Game = ({ navigation }: Props) => {
  const { isLoading } = useStatus();

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  if (isLoading) return <Intro />;

  return <Board onGoHome={navigateHome} />;
};
