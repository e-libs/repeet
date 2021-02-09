import React from 'react';
import { AttemptsDial } from 'domains/game/components/AttemptsDial';
import { ProgressBar } from 'domains/game/components/ProgressBar';
import { Timer } from 'domains/game/components/Timer';
import {
  AttemptsDialContainer,
  Container,
  GameStatusBar,
  GameProgressBar,
  LeftSpacer,
  TimerContainer,
} from 'domains/game/components/StatusBar/styles';

export const StatusBar = () => (
  <Container>
    <GameStatusBar>
      <LeftSpacer />
      <TimerContainer>
        <Timer />
      </TimerContainer>
      <AttemptsDialContainer>
        <AttemptsDial />
      </AttemptsDialContainer>
    </GameStatusBar>
    <GameProgressBar>
      <ProgressBar />
    </GameProgressBar>
  </Container>
);
