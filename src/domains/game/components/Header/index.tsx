import React from 'react';
import { Container, Score } from 'domains/game/components/Header/styles';
import { useScore } from 'domains/game/data/hooks/useScore';

export const Header = () => {
  const { score } = useScore();
  // const score = 5000000;
  return (
    <Container>
      <Score>{score}</Score>
    </Container>
  );
};
