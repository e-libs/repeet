import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { getId } from 'helpers/getId';
import { Box } from 'domains/game/components/Sign/styles';
import type { AvailableSigns } from 'domains/game/data/modules/Sign';
// TODO: check the best import flow
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';

type SignProps = {
  sign: AvailableSigns;
};

export const Sign = ({ sign }: SignProps) => {
  const highlight = useRef(new Animated.Value(1)).current;

  const blink = useCallback((): void => {
    highlight.setValue(0);
    Animated.timing(highlight, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [highlight]);

  useEffect(() => {
    const id = getId();
    Conductor.on(sign.name, id, () => {
      // TODO: check
      setTimeout(() => blink(), 500);
    });

    return () => {
      Conductor.off(id);
    };
  }, [blink]);

  return (
    <Animated.View style={{ flex: 1, opacity: highlight }}>
      <Box sign={sign} />
    </Animated.View>
  );
};
