import React from 'react';
import { Panel, BottomSpace } from 'domains/config/components/ConfigPanel/styles';
import { DifficultySelector } from 'domains/config/components/DifficultySelector';
import { ModeSelector } from 'domains/config/components/ModeSelector';
import { ShuffleSelector } from 'domains/config/components/ShuffleSelector';
import { SoundSelector } from 'domains/config/components/SoundSelector';
import { BlindSelector } from 'domains/config/components/BlindSelector';

export const ConfigPanel = () => (
  <Panel>
    <SoundSelector />
    <DifficultySelector />
    <ModeSelector />
    <ShuffleSelector />
    <BlindSelector />
    <BottomSpace />
  </Panel>
);
