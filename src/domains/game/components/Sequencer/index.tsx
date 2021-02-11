import React from 'react';
import { Container, Line } from 'domains/game/components/Sequencer/styles';
import { Sign } from 'domains/game/components/Sign';
import { Grey } from 'domains/game/data/modules/Sign';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { useSequence } from 'domains/game/data/hooks/useSequence';

export const Sequencer = () => {
  const { currentPoolSize } = useConfig();
  const { sequenceDisplay } = useSequence();

  return (
    <Container>
      <Line>
        <Sign sign={sequenceDisplay[0] ?? Grey} />
        <Sign sign={sequenceDisplay[1] ?? Grey} />
      </Line>
      <Line>
        <Sign sign={sequenceDisplay[2] ?? Grey} />
        <Sign sign={sequenceDisplay[3] ?? Grey} />
      </Line>
      {currentPoolSize === 6 && (
        <Line>
          <Sign sign={sequenceDisplay[4] ?? Grey} />
          <Sign sign={sequenceDisplay[5] ?? Grey} />
        </Line>
      )}
    </Container>
  );
};
