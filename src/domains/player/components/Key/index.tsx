import React, { useEffect, useState } from 'react';
import { useSound } from 'app/media/sound/useSound';
import { Container, Button } from 'domains/player/components/Key/styles';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { KEYPAD_EVENT } from 'domains/game/data/modules/Timing/constants';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import type { Sign } from 'domains/game/data/modules/Sign/types';
import { getId } from 'helpers/getId';
import { useIsMounted } from 'helpers/useIsMounted';

type KeyProps = {
  sign: Sign;
  onPress: (id: number) => void;
};

export const Key = ({ sign, onPress }: KeyProps) => {
  const isMounted = useIsMounted();
  const [enabled, setEnabled] = useState(false);
  const { isBlindfolded } = useConfig();
  const { play } = useSound(isBlindfolded ? sign.sound : 'sign');

  const onBoxClick = () => {
    onPress(sign.number);
  };

  const onPressIn = () => {
    play();
  };

  useEffect(() => {
    const eventId = getId();

    Conductor.on(KEYPAD_EVENT, eventId, (enableButton: boolean) => {
      if (isMounted) setEnabled(enableButton);
    });

    return () => {
      Conductor.off(eventId);
    };
  }, []);

  return (
    <Container>
      <Button color={sign.color} disabled={!enabled} onPress={onBoxClick} onPressIn={onPressIn} />
    </Container>
  );
};
