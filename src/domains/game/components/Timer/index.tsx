import React, { useEffect, useState } from 'react';
import { Container, Indicator } from 'domains/game/components/Timer/styles';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { getId } from 'helpers/getId';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';
import { TIME_BAR_EVENT, TIMER_EVENT } from 'domains/game/data/modules/Timing/constants';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const Timer = () => {
  const { currentPoolSize } = useConfig();

  const [display, setDisplay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(currentPoolSize);

  useEffect(() => {
    const id = getId();

    Conductor.on(TIMER_EVENT, id, (displayTimer: boolean) => {
      setDisplay(displayTimer);
    });

    Conductor.on(TIME_BAR_EVENT, id, (time: number) => {
      setTimeLeft(time);
    });

    return () => {
      Conductor.off(id);
    };
  }, []);

  const list = () =>
    numberToEmptyArray(currentPoolSize).map((i) => (
      <Indicator active={timeLeft >= i + 1} key={`i${i}`} />
    ));

  return <Container visible={display}>{list()}</Container>;
};
