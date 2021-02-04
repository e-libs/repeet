import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Container, Indicator } from 'domains/game/components/Timer/styles';
// TODO: check the best import flow
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { getId } from 'helpers/getId';
import { TIMER_EVENT } from 'domains/game/data/modules/Timing/constants';

export const Timer = () => {
  const [display, setDisplay] = useState(false);

  const timeBars = 2;

  useEffect(() => {
    const id = getId();

    Conductor.on(TIMER_EVENT, id, () => {
      console.log('UPDATE STATE');
      setDisplay(true);
    });

    return () => {
      Conductor.off(id);
    };
  }, []);

  return (
    <Container>
      <View style={{ display: display ? 'flex' : 'none', flexDirection: 'row' }}>
        <Indicator active={timeBars >= 1}>I</Indicator>
        <Indicator active={timeBars >= 2}>I</Indicator>
        <Indicator active={timeBars >= 3}>I</Indicator>
        <Indicator active={timeBars >= 4}>I</Indicator>
      </View>
    </Container>
  );
};
