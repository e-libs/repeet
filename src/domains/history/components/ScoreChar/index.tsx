import React from 'react';
import { Placeholder, Char, Text } from 'domains/history/components/ScoreChar/styles';

type ScoreCharProps = {
  bgColor: string;
  children: string | number;
  color: string;
  isFirst: boolean;
};

export const ScoreChar = ({ bgColor, children, color, isFirst }: ScoreCharProps) => (
  <Placeholder>
    {children
      .toString()
      .split('')
      .map((char, i) => (
        <Char color={bgColor} isFirst={isFirst} key={i}>
          <Text color={color} isFirst={isFirst}>
            {char}
          </Text>
        </Char>
      ))}
  </Placeholder>
);
