import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useShell } from 'domains/shell/data/hooks/useShell';
import { usePlayer } from 'domains/player/data/hooks/usePlayer';
import { getId } from 'helpers/getId';
import { useTranslation } from 'app/translation';

export const Sample = () => {
  const { testAction, testSelectorValue } = useShell();
  const { playerName } = usePlayer();

  const test = async () => {
    const x = getId();
    testAction({ test1: x });
  };

  const { t } = useTranslation();

  return (
    <View>
      <Text>
        {t('sample')} {testSelectorValue}
      </Text>
      <Text>
        {t('name')}: {playerName}
      </Text>
      <TouchableOpacity onPress={test} style={{ backgroundColor: 'red' }}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};
