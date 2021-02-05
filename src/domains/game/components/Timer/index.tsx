import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Container, Indicator } from 'domains/game/components/Timer/styles';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { getId } from 'helpers/getId';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';
import { TIME_BAR_EVENT, TIMER_EVENT, timeBars } from 'domains/game/data/modules/Timing/constants';

export const Timer = () => {
  const [display, setDisplay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeBars);

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
    numberToEmptyArray(timeBars).map((i) => (
      <Indicator active={timeLeft >= i + 1} key={`i${i}`}>
        I
      </Indicator>
    ));

  return (
    <Container>
      <View style={{ display: display ? 'flex' : 'none', flexDirection: 'row' }}>{list()}</View>
    </Container>
  );
};
