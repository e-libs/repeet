import React, { useEffect, useState } from 'react';
import { useSound } from 'app/media/sound/useSound';
import { Container, Indicator } from 'domains/game/components/Timer/styles';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { TIME_BAR_EVENT, TIMER_EVENT } from 'domains/game/data/modules/Timing/constants';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';
import { getId } from 'helpers/getId';
import { useIsMounted } from 'helpers/useIsMounted';

export const Timer = () => {
  const isMounted = useIsMounted();
  const { currentPoolSize } = useConfig();
  const { play } = useSound('tick');
  const [display, setDisplay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(currentPoolSize);

  useEffect(() => {
    const timerId = getId();
    const timeBarId = getId();

    Conductor.on(TIMER_EVENT, timerId, (displayTimer: boolean) => {
      if (isMounted) setDisplay(displayTimer);
    });

    Conductor.on(TIME_BAR_EVENT, timeBarId, (time: number) => {
      if (isMounted) {
        setTimeLeft(time);
        play();
      }
    });

    return () => {
      Conductor.off(timerId);
      Conductor.off(timeBarId);
    };
  }, []);

  const list = () =>
    numberToEmptyArray(currentPoolSize).map((i) => (
      <Indicator active={timeLeft >= i + 1} key={`i${i}`} />
    ));

  return <Container visible={display}>{list()}</Container>;
};
