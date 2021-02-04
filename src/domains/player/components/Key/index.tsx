import React from 'react';
import { Container, Button } from 'domains/player/components/Key/styles';

type KeyProps = {
  id: number;
  color: string;
  onPress: (id: number) => void;
};

export const Key = ({ color, id, onPress }: KeyProps) => {
  const onBoxClick = () => {
    onPress(id);
  };

  return (
    <Container>
      <Button color={color} onPress={onBoxClick} />
    </Container>
  );
};
