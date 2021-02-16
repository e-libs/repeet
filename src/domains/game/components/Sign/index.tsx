import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Box } from 'domains/game/components/Sign/styles';
import type { AvailableSigns } from 'domains/game/data/modules/Sign';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { useSpeed } from 'domains/game/data/hooks/useSpeed';
import { getId } from 'helpers/getId';
import { useSound } from 'app/media/sound/useSound';

type SignProps = {
  sign: AvailableSigns;
};

export const Sign = ({ sign }: SignProps) => {
  const highlight = useRef(new Animated.Value(1)).current;

  const { play } = useSound(sign.sound);

  const { speed } = useSpeed();

  const blink = useCallback(async () => {
    highlight.setValue(0);
    Animated.timing(highlight, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    await play();
  }, [highlight]);

  useEffect(() => {
    const id = getId();
    Conductor.on(sign.name, id, () => {
      setTimeout(() => blink(), speed / 2);
    });

    return () => {
      Conductor.off(id);
    };
  }, [sign]);

  return (
    <Animated.View style={{ flex: 1, opacity: highlight }}>
      <Box sign={sign} />
    </Animated.View>
  );
};
