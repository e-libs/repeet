import React from 'react';
import { Container, Line } from 'domains/game/components/Sequencer/styles';
import { Sign } from 'domains/game/components/Sign';
import { Red, Green, Yellow, Blue } from 'domains/game/data/modules/Sign';

export const Sequencer = () => (
  <Container>
    <Line>
      <Sign sign={Red} />
      <Sign sign={Green} />
    </Line>
    <Line>
      <Sign sign={Yellow} />
      <Sign sign={Blue} />
    </Line>
  </Container>
);