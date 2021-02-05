import React from 'react';
import {
  BackButton,
  BackButtonIcon,
  Container,
  Score,
} from 'domains/game/components/Header/styles';
import { useScore } from 'domains/game/data/hooks/useScore';

export const Header = () => {
  const { score } = useScore();
  return (
    <Container>
      <BackButton>
        <BackButtonIcon>‹</BackButtonIcon>
      </BackButton>
      <Score>{score}</Score>
    </Container>
  );
};
