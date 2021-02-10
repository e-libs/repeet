import React, { useEffect } from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Board } from 'domains/game/components/Board';
import { Intro } from 'domains/game/components/Intro';
import type { RootStackParamList } from 'screens/types';
import { useStatus } from 'domains/game/data/hooks/useStatus';
import { useCountdown } from 'helpers/useCountdown';

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: GameScreenNavigationProp;
};

export const Game = ({ navigation }: Props) => {
  const { isLoading, startGame } = useStatus();
  const { timer } = useCountdown(3);

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (timer === 0) setTimeout(() => startGame(), 1000);
  }, [timer]);

  if (isLoading) return <Intro secondsLeft={timer} />;

  return <Board onGoHome={navigateHome} />;
};
