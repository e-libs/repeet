import React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainView, HeaderView, PlayerView, SequencerView, TimerView } from 'screens/Game/styles';
import { useGame } from 'domains/game/data/hooks/useGame';
import { Sequencer } from 'domains/game/components/Sequencer';
import { KeyPad } from 'domains/player/components/KeyPad';
import { StatusBar } from 'domains/game/components/StatusBar';
import { Header } from 'domains/game/components/Header';
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
    speed,
  } = useGame();

  logSequenceOutput('CURRENT', currentSequence);
  logSequenceOutput('PLAYER ', playerSequence);
  console.log(
    `SPEED: ${speed}, SCORE: ${score}, LEVEL: ${level},  NAILED ${rightSequences}, ATTEMPTS ${attemptsLeft}`,
  );
  console.log('');

  if (isGameOver) {
    // TODO: temporary so it won't complain, will be replaced by modal + redirect
    window.setTimeout(() => navigation.navigate('Home'), 500);
  }

  const exitGame = () => {
    navigation.navigate('Home');
  };

  return (
    <MainView>
      <HeaderView>
        <Header onExit={exitGame} />
      </HeaderView>
      <SequencerView>
        <Sequencer />
      </SequencerView>
      <TimerView>
        <StatusBar />
      </TimerView>
      <PlayerView>
        <KeyPad onKeyPress={addPlayerMove} />
      </PlayerView>
    </MainView>
  );
};
