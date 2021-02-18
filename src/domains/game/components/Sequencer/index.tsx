import React from 'react';
import { Container, Line } from 'domains/game/components/Sequencer/styles';
import { Sign } from 'domains/game/components/Sign';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { useSequence } from 'domains/game/data/hooks/useSequence';

export const Sequencer = () => {
  const { currentPoolSize } = useConfig();
  const { sequenceDisplay } = useSequence();

  if (sequenceDisplay.length === 0) {
    return null;
  }

  return (
    <Container>
      <Line>
        <Sign sign={sequenceDisplay[0]} />
        <Sign sign={sequenceDisplay[1]} />
      </Line>
      <Line>
        <Sign sign={sequenceDisplay[2]} />
        <Sign sign={sequenceDisplay[3]} />
      </Line>
      {currentPoolSize === 6 && (
        <Line>
          <Sign sign={sequenceDisplay[4]} />
          <Sign sign={sequenceDisplay[5]} />
        </Line>
      )}
    </Container>
  );
};
