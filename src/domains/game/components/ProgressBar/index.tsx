import React from 'react';
import { Container, Indicator } from 'domains/game/components/ProgressBar/styles';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';
import { usePlayerSequence } from 'domains/game/data/hooks/usePlayerSequence';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const ProgressBar = () => {
  const { playerSequence } = usePlayerSequence();
  const { currentPoolSize } = useConfig();

  const list = () =>
    numberToEmptyArray(currentPoolSize).map((i) => (
      <Indicator active={playerSequence.length >= i + 1} key={`i${i}`} />
    ));

  return <Container>{list()}</Container>;
};
