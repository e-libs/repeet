import React from 'react';
import { useShell } from 'domains/shell/data/hooks/useShell';
import { Text, View } from 'react-native';

export const Sample = () => {
  const { testAction, testSelectorValue } = useShell();

  testAction({ test1: 'aaa1' });

  console.log('testSelectorValue', testSelectorValue);

  return (
    <View>
      <Text>Sample</Text>
    </View>
  );
};
