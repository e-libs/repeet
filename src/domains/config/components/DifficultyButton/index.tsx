import React from 'react';
import { useTranslation } from 'app/translation';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { ConfigButton } from 'domains/config/components/ConfigButton';
import type { Difficulty } from 'domains/config/data/store/types';
import { DifficultyLevels } from 'domains/game/data/modules/Game/constants';

type DifficultyButtonProps = {
  difficulty: Difficulty;
};

export const DifficultyButton = ({ difficulty }: DifficultyButtonProps) => {
  const { currentDifficulty, switchDifficulty } = useConfig();
  const { t } = useTranslation();

  return (
    <ConfigButton
      active={currentDifficulty === difficulty}
      color={DifficultyLevels[difficulty].color}
      disabled={currentDifficulty === difficulty}
      isLeft={difficulty === 'EASY'}
      isRight={difficulty === 'HARD'}
      onPress={() => switchDifficulty(difficulty)}
      label={t(`config.difficulty.${difficulty.toLowerCase()}.label`)}
    />
  );
};
