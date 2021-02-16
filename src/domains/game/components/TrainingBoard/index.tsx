import React from 'react';
import { Text } from 'react-native';
import {
  HeaderView,
  MainView,
  PlayerView,
  SequencerView,
  TimerView,
} from 'domains/game/components/Board/styles';
import { Header } from 'domains/game/components/Header';
import { KeyPad } from 'domains/player/components/KeyPad';
import { Sequencer } from 'domains/game/components/Sequencer';

type TrainingBoardProps = {
  onGoHome: () => void;
};

export const TrainingBoard = ({ onGoHome }: TrainingBoardProps) => {
  console.log('Training');

  const exitGame = () => {
    console.log('GO');
    onGoHome();
  };

  return (
    <MainView>
      <HeaderView>
        <Header isTraining onExit={exitGame} />
      </HeaderView>
      <SequencerView>
        <Sequencer />
      </SequencerView>
      <TimerView>
        <Text style={{ color: 'red' }}>ready?</Text>
      </TimerView>
      <PlayerView>
        <KeyPad />
      </PlayerView>
    </MainView>
  );
};
