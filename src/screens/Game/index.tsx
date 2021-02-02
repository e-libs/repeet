import React from 'react';
import { Text } from 'react-native';
import { MainView, HeaderView, PlayerView, SequencerView, TimerView } from 'screens/Game/styles';
import { useGame } from 'domains/game/data/hooks/useGame';
import { Sequencer } from 'domains/game/components/Sequencer';

export const Game = () => {
  useGame();

  return (
    <MainView>
      <HeaderView />
      <SequencerView>
        <Sequencer />
      </SequencerView>
      <TimerView>
        <Text style={{ color: 'green' }}>TIMER</Text>
      </TimerView>
      <PlayerView>
        <Text style={{ color: 'green' }}>PLAYER</Text>
      </PlayerView>
    </MainView>
  );
};
