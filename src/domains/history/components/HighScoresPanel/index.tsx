import React from 'react';
import { Button } from 'react-native';
import { useHistory } from 'domains/history/data/hooks/useHistory';
import type { HighScore } from 'domains/history/data/types';
import {
  Container,
  InitialsPlace,
  Score,
  ScoreRow,
} from 'domains/history/components/HighScoresPanel/styles';
import { ScoreChar } from 'domains/history/components/ScoreChar';

export const HighScoresPanel = () => {
  const { purge, records } = useHistory();

  const highlight = records.length > 3;

  const colors = [
    ['#14F', '#2bcfff'],
    ['#ffe067', '#f11'],
  ];

  let index = 1;

  return (
    <Container>
      {records.map((record: HighScore) => {
        const h = highlight && index <= 3 ? [1, 0] : [0, 1];

        index += 1;

        return (
          <ScoreRow key={`${record.playerInitials}_${record.date.getTime()}`}>
            <InitialsPlace>
              <ScoreChar bgColor={colors[0][h[0]]} color={colors[0][h[1]]}>
                {record.playerInitials}
              </ScoreChar>
            </InitialsPlace>
            <Score>
              <ScoreChar bgColor={colors[1][h[0]]} color={colors[1][h[1]]}>
                {record.score}
              </ScoreChar>
            </Score>
          </ScoreRow>
        );
      })}
      <Button title="clear" onPress={purge}></Button>
    </Container>
  );
};
