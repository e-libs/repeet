import React from 'react';
import { Placeholder, Char, Text } from 'domains/history/components/ScoreChar/styles';

type ScoreCharProps = {
  bgColor: string;
  children: string | number;
  color: string;
};

export const ScoreChar = ({ bgColor, children, color }: ScoreCharProps) => (
  <Placeholder>
    {children
      .toString()
      .split('')
      .map((char, i) => (
        <Char color={bgColor} key={i}>
          <Text color={color}>{char}</Text>
        </Char>
      ))}
  </Placeholder>
);
