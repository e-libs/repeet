import React from 'react';
import { useTranslation } from 'app/translation';
import { Container, Label } from 'domains/game/components/Level/styles';
import { useLevel } from 'domains/game/data/hooks/useLevel';

export const Level = () => {
  const { t } = useTranslation();
  const { level } = useLevel();

  return (
    <Container>
      <Label>
        {t('game.status.level')} {level}
      </Label>
    </Container>
  );
};
