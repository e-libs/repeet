import React from 'react';
import { useShell } from 'domains/shell/data/hooks/useShell';
import { Text, View } from 'react-native';

export const Sample = () => {
  const { testAction } = useShell();

  testAction({ test1: 'aaa' });

  return (
    <View>
      <Text>Sample</Text>
    </View>
  );
};
