import React from 'react';
import { useTranslation } from 'app/translation';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  Container,
  Description,
  Label,
} from 'domains/config/components/DifficultySelector/styles';
import { DifficultyButton } from 'domains/config/components/DifficultyButton';

export const DifficultySelector = () => {
  const { currentDifficulty } = useConfig();
  const { t } = useTranslation();

  return (
    <Container>
      <Label>{t('config.difficulty.label')}</Label>
      <ButtonContainer>
        <DifficultyButton difficulty="EASY" />
        <DifficultyButton difficulty="MEDIUM" />
        <DifficultyButton difficulty="HARD" />
      </ButtonContainer>
      <Description>
        {t(`config.difficulty.${currentDifficulty.toLowerCase()}.description`)}
      </Description>
    </Container>
  );
};
