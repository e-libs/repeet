import React from 'react';
import { Text } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainView, HeaderView, PlayerView, SequencerView, TimerView } from 'screens/Game/styles';
import { useGame } from 'domains/game/data/hooks/useGame';
import { Sequencer } from 'domains/game/components/Sequencer';
import { KeyPad } from 'domains/player/components/KeyPad';
import type { RootStackParamList } from 'screens/types';
import { logSequenceOutput } from 'helpers/logSequenceOutput';

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: GameScreenNavigationProp;
};

export const Game = ({ navigation }: Props) => {
  const {
    addPlayerMove,
    attemptsLeft,
    currentSequence,
    isGameOver,
    level,
    playerSequence,
    rightSequences,
    score,
  } = useGame();

  logSequenceOutput('CURRENT', currentSequence);
  logSequenceOutput('PLAYER ', playerSequence);
  console.log(
    `ATTEMPTS ${attemptsLeft} NAILED ${rightSequences}, SCORE: ${score}, LEVEL: ${level}`,
  );
  console.log('');

  if (isGameOver) {
    // TODO: temporary so it won't complain, will be replaced by modal + redirect
    window.setTimeout(() => navigation.navigate('Home'), 500);
  }

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
