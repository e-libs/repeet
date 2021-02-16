import React from 'react';
import { Key } from 'domains/player/components/Key';
import { Container, Line } from 'domains/player/components/KeyPad/styles';
import { Red, Green, Yellow, Blue, Purple, Wine } from 'domains/game/data/modules/Sign';
import { useConfig } from 'domains/config/data/hooks/useConfig';

type KeyPadProps = {
  onKeyPress?: (id: number) => void;
};

export const KeyPad = ({ onKeyPress }: KeyPadProps) => {
  const { currentPoolSize } = useConfig();

  const onBoxClick = (id: number) => {
    onKeyPress?.(id);
  };

  return (
    <Container>
      <Line>
        <Key sign={Red} onPress={onBoxClick}></Key>
        <Key sign={Green} onPress={onBoxClick}></Key>
      </Line>
      <Line>
        <Key sign={Yellow} onPress={onBoxClick}></Key>
        <Key sign={Blue} onPress={onBoxClick}></Key>
      </Line>
      {currentPoolSize === 6 && (
        <Line>
          <Key sign={Purple} onPress={onBoxClick}></Key>
          <Key sign={Wine} onPress={onBoxClick}></Key>
        </Line>
      )}
    </Container>
  );
};
