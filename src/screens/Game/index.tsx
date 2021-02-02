import React from 'react';
import { Text } from 'react-native';
import { MainView } from 'screens/Game/styles';
import { useGame } from 'domains/game/data/hooks/useGame';

export const Game = () => {
  const { level } = useGame();

  console.log('LEVEL', level);

  return (
    <MainView color="#99F">
      <Text>Game</Text>
    </MainView>
  );
};
