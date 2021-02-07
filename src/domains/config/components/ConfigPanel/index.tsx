import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { Panel } from 'domains/config/components/ConfigPanel/styles';

export const ConfigPanel = () => {
  const { currentMode, switchMode } = useConfig();

  return (
    <Panel>
      <TouchableOpacity onPress={switchMode}>
        <Text style={{ marginTop: 50 }}>mode: {currentMode}</Text>
      </TouchableOpacity>
    </Panel>
  );
};
