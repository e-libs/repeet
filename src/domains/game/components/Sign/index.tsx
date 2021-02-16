import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useSound } from 'app/media/sound/useSound';
import { Box } from 'domains/game/components/Sign/styles';
import type { AvailableSigns } from 'domains/game/data/modules/Sign';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { useSpeed } from 'domains/game/data/hooks/useSpeed';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { getId } from 'helpers/getId';
import { useIsMounted } from 'helpers/useIsMounted';

type SignProps = {
  sign: AvailableSigns;
};

export const Sign = ({ sign }: SignProps) => {
  const isMounted = useIsMounted();
  const highlight = useRef(new Animated.Value(1)).current;
  const { isBlindfolded } = useConfig();
  const { play } = useSound(isBlindfolded ? sign.sound : 'sign');
  const { speed } = useSpeed();

  const color = isBlindfolded ? undefined : sign.color;

  const blink = useCallback(async () => {
    if (!isMounted) return;

    if (!isBlindfolded) {
      highlight.setValue(0);
      Animated.timing(highlight, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

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
      <Box color={color} />
    </Animated.View>
  );
};
