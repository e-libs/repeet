import React from 'react';
import { View } from 'react-native';
import { AttemptsDial } from 'domains/game/components/AttemptsDial';
import { ProgressBar } from 'domains/game/components/ProgressBar';
import { Timer } from 'domains/game/components/Timer';
import {
  Container,
  GameStatusBar,
  GameProgressBar,
} from 'domains/game/components/StatusBar/styles';

export const StatusBar = () => (
  <Container>
    <GameStatusBar>
      <View>
        <Timer />
      </View>
      <View style={{ right: 20, position: 'absolute' }}>
        <AttemptsDial />
      </View>
    </GameStatusBar>
    <GameProgressBar>
      <ProgressBar />
    </GameProgressBar>
  </Container>
);
