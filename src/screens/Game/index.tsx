import React from 'react';
import { Text } from 'react-native';
import { MainView, HeaderView, PlayerView, SequencerView, TimerView } from 'screens/Game/styles';
import { useGame } from 'domains/game/data/hooks/useGame';
import { Sequencer } from 'domains/game/components/Sequencer';
import { KeyPad } from 'domains/player/components/KeyPad';

export const Game = () => {
  const { currentSequence } = useGame();

  console.log('CURR', currentSequence);

  const keyPressed = (id: number) => {
    console.log('>>> ', id);
  };

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
        <KeyPad onKeyPress={keyPressed} />
      </PlayerView>
    </MainView>
  );
};
