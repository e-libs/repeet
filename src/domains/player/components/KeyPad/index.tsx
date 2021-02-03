import React from 'react';
import { Key } from 'domains/player/components/Key';
import { Container, Line } from 'domains/player/components/KeyPad/styles';
import { Red, Green, Yellow, Blue } from 'domains/game/data/modules/Sign';

type KeyPadProps = {
  onKeyPress: (id: number) => void;
};

export const KeyPad = ({ onKeyPress }: KeyPadProps) => {
  const onBoxClick = (id: number) => {
    onKeyPress(id);
    console.log('button', id, 'was clicked');
  };

  return (
    <Container>
      <Line>
        <Key id={Red.number} color={Red.color} onPress={onBoxClick}></Key>
        <Key id={Green.number} color={Green.color} onPress={onBoxClick}></Key>
      </Line>
      <Line>
        <Key id={Yellow.number} color={Yellow.color} onPress={onBoxClick}></Key>
        <Key id={Blue.number} color={Blue.color} onPress={onBoxClick}></Key>
      </Line>
    </Container>
  );
};
