import React from 'react';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';
import {
  Container,
  DialContainer,
  Indicator,
  LeftSpacer,
} from 'domains/game/components/AttemptsDial/styles';
import { useAttempts } from 'domains/game/data/hooks/useAttempts';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const AttemptsDial = () => {
  const { attemptsLeft } = useAttempts();
  const { currentAttempts } = useConfig();

  const list = () =>
    numberToEmptyArray(currentAttempts).map((i) => (
      <Indicator active={attemptsLeft >= i + 1} key={`i${i}`} />
    ));

  return (
    <Container>
      <LeftSpacer />
      <DialContainer>{list()}</DialContainer>
    </Container>
  );
};
