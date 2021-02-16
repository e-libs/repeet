import React, { useEffect, useState } from 'react';
import { useSound } from 'app/media/sound/useSound';
import { Container, Button } from 'domains/player/components/Key/styles';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { KEYPAD_EVENT } from 'domains/game/data/modules/Timing/constants';
import { getId } from 'helpers/getId';

type KeyProps = {
  id: number;
  color: string;
  onPress: (id: number) => void;
};

export const Key = ({ color, id, onPress }: KeyProps) => {
  const [enabled, setEnabled] = useState(false);
  const { play } = useSound('sign');

  const onBoxClick = () => {
    play();
    onPress(id);
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
      <Button color={color} disabled={!enabled} onPress={onBoxClick} />
    </Container>
  );
};
