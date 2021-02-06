import React from 'react';
import { Container, Line } from 'domains/game/components/Sequencer/styles';
import { Sign } from 'domains/game/components/Sign';
import { Red, Green, Yellow, Blue, Purple, Wine } from 'domains/game/data/modules/Sign';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const Sequencer = () => {
  const { currentPoolSize } = useConfig();

  return (
    <Container>
      <Line>
        <Sign sign={Red} />
        <Sign sign={Green} />
      </Line>
      <Line>
        <Sign sign={Yellow} />
        <Sign sign={Blue} />
      </Line>
      {currentPoolSize === 6 && (
        <Line>
          <Sign sign={Purple} />
          <Sign sign={Wine} />
        </Line>
      )}
    </Container>
  );
};
