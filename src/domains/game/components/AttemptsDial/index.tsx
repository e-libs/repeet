import React from 'react';
import {
  Container,
  DialContainer,
  Indicator,
  LeftSpacer,
} from 'domains/game/components/AttemptsDial/styles';
import { useAttempts } from 'domains/game/data/hooks/useAttempts';

export const AttemptsDial = () => {
  const { attemptsLeft } = useAttempts();

  return (
    <Container>
      <LeftSpacer />
      <DialContainer>
        <Indicator active={attemptsLeft >= 1} />
        <Indicator active={attemptsLeft >= 2} />
        <Indicator active={attemptsLeft >= 3} />
      </DialContainer>
    </Container>
  );
};
