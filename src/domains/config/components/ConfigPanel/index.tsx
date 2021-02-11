import React from 'react';
import { Panel } from 'domains/config/components/ConfigPanel/styles';
import { DifficultySelector } from 'domains/config/components/DifficultySelector';
import { ModeSelector } from 'domains/config/components/ModeSelector';
import { ShuffleSelector } from 'domains/config/components/ShuffleSelector';

export const ConfigPanel = () => (
  <Panel>
    <DifficultySelector />
    <ModeSelector />
    <ShuffleSelector />
  </Panel>
);
