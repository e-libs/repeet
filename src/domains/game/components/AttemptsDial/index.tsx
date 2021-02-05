import React from 'react';
import { Container, Indicator } from 'domains/game/components/AttemptsDial/styles';
import { useAttempts } from 'domains/game/data/hooks/useAttempts';

export const AttemptsDial = () => {
  const { attemptsLeft } = useAttempts();

  return (
    <Container>
      <Indicator active={attemptsLeft >= 1}>I</Indicator>
      <Indicator active={attemptsLeft >= 2}>I</Indicator>
      <Indicator active={attemptsLeft >= 3}>I</Indicator>
    </Container>
  );
};
