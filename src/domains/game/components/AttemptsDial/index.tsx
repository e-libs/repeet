import React from 'react';
import { Container, Indicator } from 'domains/game/components/AttemptsDial/styles';

export const AttemptsDial = () => {
  const life = 3;
  return (
    <Container>
      <Indicator active={life >= 1}>I</Indicator>
      <Indicator active={life >= 2}>I</Indicator>
      <Indicator active={life >= 3}>I</Indicator>
    </Container>
  );
};
