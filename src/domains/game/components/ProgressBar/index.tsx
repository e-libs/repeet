import React from 'react';
import { Container, Indicator } from 'domains/game/components/ProgressBar/styles';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';
import { timeBars } from 'domains/game/data/modules/Timing/constants';
import { usePlayerSequence } from 'domains/game/data/hooks/usePlayerSequence';

export const ProgressBar = () => {
  const { playerSequence } = usePlayerSequence();

  const list = () =>
    numberToEmptyArray(timeBars).map((i) => (
      <Indicator active={playerSequence.length >= i + 1} key={`i${i}`} />
    ));

  return <Container>{list()}</Container>;
};
