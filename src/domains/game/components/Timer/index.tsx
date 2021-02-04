import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Container } from 'domains/game/components/Timer/styles';
// TODO: check the best import flow
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { getId } from 'helpers/getId';

export const Timer = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const id = getId();

    Conductor.on('TIMER', id, () => {
      console.log('UPDATE STATE');
      setDisplay(true);
    });

    return () => {
      Conductor.off(id);
    };
  }, []);

  return (
    <Container>
      <Text style={{ color: 'red', display: display ? 'flex' : 'none' }}>03</Text>
    </Container>
  );
};
