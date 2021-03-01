import React from 'react';
import { Text, View, Button } from 'react-native';
import { useHistory } from 'domains/history/data/hooks/useHistory';
import type { HighScore } from 'domains/history/data/types';

export const HighScoresPanel = () => {
  const { purge, records } = useHistory();
  console.log('records', records);

  return (
    <View>
      {records.map((record: HighScore) => (
        <View key={`${record.playerInitials}_${record.date.getTime()}`}>
          <Text>
            {record.playerInitials} - {record.score} - {record.date.toDateString()}
          </Text>
        </View>
      ))}
      <Button title="clear" onPress={purge}></Button>
    </View>
  );
};
