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
  console.log('records', records);

  return (
    <Container>
      {records.map((record: HighScore) => (
        <ScoreRow key={`${record.playerInitials}_${record.date.getTime()}`}>
          <InitialsPlace>
            <ScoreChar bgColor="#2bcfff" color="#006">
              {record.playerInitials}
            </ScoreChar>
          </InitialsPlace>
          <Score>
            <ScoreChar bgColor="#ffe067" color="#FF48A6">
              {record.score}
            </ScoreChar>
          </Score>
        </ScoreRow>
      ))}
      <Button title="clear" onPress={purge}></Button>
    </Container>
  );
};
