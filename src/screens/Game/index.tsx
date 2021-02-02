import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { MainView } from 'screens/Game/styles';
import { useGame } from 'domains/game/data/hooks/useGame';

export const Game = () => {
  const { start, status } = useGame();

  console.log('LEVEL', status.level);

  useEffect(() => {
    start({ level: 1 });
  }, []);

  return (
    <MainView color="#99F">
      <Text>Game</Text>
    </MainView>
  );
};
