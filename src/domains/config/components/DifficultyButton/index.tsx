import React from 'react';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { ButtonText, Button } from 'domains/config/components/DifficultyButton/styles';
import { useTranslation } from 'app/translation';
import type { Difficulty } from 'domains/config/data/store/types';
import { DifficultyLevels } from 'domains/game/data/modules/Game/constants';

type DifficultyButtonProps = {
  difficulty: Difficulty;
};

export const DifficultyButton = ({ difficulty }: DifficultyButtonProps) => {
  const { currentDifficulty, switchDifficulty } = useConfig();
  const { t } = useTranslation();

  return (
    <Button
      active={currentDifficulty === difficulty}
      color={DifficultyLevels[difficulty].color}
      disabled={currentDifficulty === difficulty}
      isLeft={difficulty === 'EASY'}
      isRight={difficulty === 'HARD'}
      onPress={() => switchDifficulty(difficulty)}
    >
      <ButtonText>{t(`config.difficulty.${difficulty.toLowerCase()}.label`)}</ButtonText>
    </Button>
  );
};
