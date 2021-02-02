import React from 'react';
import { Text } from 'react-native';
import { MainView, HeaderView, PlayerView, SequencerView, TimerView } from 'screens/Game/styles';
import { useGame } from 'domains/game/data/hooks/useGame';
import { Sequencer } from 'domains/game/components/Sequencer';
import { KeyPad } from 'domains/player/components/KeyPad';

export const Game = () => {
  const { addPlayerMove, currentSequence, playerSequence } = useGame();
  console.log('CURRENT', currentSequence);
  console.log('PLAYER', playerSequence);

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
        <KeyPad onKeyPress={addPlayerMove} />
      </PlayerView>
    </MainView>
  );
};
