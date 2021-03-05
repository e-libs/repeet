import React from 'react';
import { Button } from 'react-native';
import { useHistory } from 'domains/history/data/hooks/useHistory';
import type { HighScore } from 'domains/history/data/types';
import {
  BottomSpace,
  Container,
  InitialsPlace,
  Score,
  ScoreRow,
} from 'domains/history/components/HighScoresPanel/styles';
import { ScoreChar } from 'domains/history/components/ScoreChar';

export const HighScoresPanel = () => {
  const { purge, records } = useHistory();
  const highlight = records.length > 1;
  let index = 1;

  const colors = [
    ['#58ed8f', 'black', '#58ed8f', 'black'],
    ['#456b87', 'white', '#6e97b5', 'white'],
  ];

  return (
    <Container>
      {records.map((record: HighScore) => {
        const isFirst = highlight && index === 1;
        const color = isFirst ? colors[0] : colors[1];

        index += 1;

        return (
          <ScoreRow key={`${record.playerInitials}_${record.date.getTime()}`}>
            <InitialsPlace>
              <ScoreChar bgColor={color[0]} color={color[1]} isFirst={isFirst}>
                {record.playerInitials}
              </ScoreChar>
            </InitialsPlace>
            <Score>
              <ScoreChar bgColor={color[2]} color={color[3]} isFirst={isFirst}>
                {record.score}
              </ScoreChar>
            </Score>
          </ScoreRow>
        );
      })}
      <Button title="clear" onPress={purge}></Button>
      <BottomSpace />
    </Container>
  );
};
