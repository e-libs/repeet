import React from 'react';
import { useTranslation } from 'app/translation';
import { ConfigSelector } from 'domains/config/components/ConfigSelector';
import { DifficultyLevels } from 'domains/game/data/modules/Game/constants';
import type { ConfigOption } from 'domains/config/data/types';

export const DifficultySelector = () => {
  const { t } = useTranslation();
  const options: ConfigOption[] = [
    {
      color: DifficultyLevels.EASY.color,
      description: t('config.difficulty.easy.description'),
      fontSize: 20,
      label: t('config.difficulty.easy.label'),
      value: 'EASY',
      param: 'EASY',
    },
    {
      color: DifficultyLevels.MEDIUM.color,
      description: t('config.difficulty.medium.description'),
      fontSize: 20,
      label: t('config.difficulty.medium.label'),
      value: 'MEDIUM',
      param: 'MEDIUM',
    },
    {
      color: DifficultyLevels.HARD.color,
      description: t('config.difficulty.hard.description'),
      fontSize: 20,
      label: t('config.difficulty.hard.label'),
      value: 'HARD',
      param: 'HARD',
    },
  ];

  return (
    <ConfigSelector
      title={t('config.difficulty.label')}
      options={options}
      configType="DIFFICULTY"
    />
  );
};
