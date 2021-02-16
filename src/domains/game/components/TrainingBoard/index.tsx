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

export const TrainingBoard = () => {
  console.log('Training');

  return (
    <MainView>
      <HeaderView>
        <Header isTraining />
      </HeaderView>
      <SequencerView>
        <Sequencer />
      </SequencerView>
      <TimerView>
        <Text>ready?</Text>
      </TimerView>
      <PlayerView>
        <KeyPad />
      </PlayerView>
    </MainView>
  );
};
