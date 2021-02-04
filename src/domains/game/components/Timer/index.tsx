import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Container, Indicator } from 'domains/game/components/Timer/styles';
// TODO: check the best import flow
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { getId } from 'helpers/getId';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';
import { TIME_BAR_EVENT, TIMER_EVENT, timeBars } from 'domains/game/data/modules/Timing/constants';

export const Timer = () => {
  const [display, setDisplay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeBars);

  useEffect(() => {
    const id = getId();

    Conductor.on(TIMER_EVENT, id, (displayTimer: string) => {
      setDisplay(displayTimer === 'true');
    });

    Conductor.on(TIME_BAR_EVENT, id, (time: string) => {
      // console.log('UPDATE TIMER', time);
      setTimeLeft(parseInt(time, 10));
    });

    return () => {
      Conductor.off(id);
    };
  }, []);

  const list = () =>
    numberToEmptyArray(timeBars).map((i) => <Indicator active={timeLeft >= i + 1}>I</Indicator>);

  return (
    <Container>
      <View style={{ display: display ? 'flex' : 'none', flexDirection: 'row' }}>{list()}</View>
    </Container>
  );
};
