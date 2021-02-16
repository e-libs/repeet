import React, { useEffect, useState } from 'react';
import { useSound } from 'app/media/sound/useSound';
import { Container, Button } from 'domains/player/components/Key/styles';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { KEYPAD_EVENT } from 'domains/game/data/modules/Timing/constants';
import { getId } from 'helpers/getId';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import type { Sign } from 'domains/game/data/modules/Sign/types';

type KeyProps = {
  sign: Sign;
  onPress: (id: number) => void;
};

export const Key = ({ sign, onPress }: KeyProps) => {
  const [enabled, setEnabled] = useState(false);

  const { isBlindModeOn } = useConfig();

  const { play } = useSound(isBlindModeOn ? sign.sound : 'sign');

  const onBoxClick = () => {
    play();
    onPress(sign.number);
  };

  useEffect(() => {
    const eventId = getId();

    Conductor.on(KEYPAD_EVENT, eventId, (enableButton: boolean) => {
      setEnabled(enableButton);
    });

    return () => {
      Conductor.off(eventId);
    };
  }, []);

  return (
    <Container>
      <Button color={sign.color} disabled={!enabled} onPress={onBoxClick} />
    </Container>
  );
};
