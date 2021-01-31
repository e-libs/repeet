import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useShell } from 'domains/shell/data/hooks/useShell';
import { v4 as uuid } from 'react-native-uuid';

export const Sample = () => {
  const { testAction, testSelectorValue } = useShell();

  const test = async () => {
    const x = uuid();
    console.log('ID', x);

    testAction({ test1: x });
  };

  return (
    <View>
      <Text>Sample {testSelectorValue}</Text>
      <TouchableOpacity onPress={test} style={{ backgroundColor: 'red' }}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};
