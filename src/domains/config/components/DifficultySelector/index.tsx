import React from 'react';
import { View } from 'react-native';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  ButtonText,
  EasyButton,
  MediumButton,
  HardButton,
  Description,
  Label,
} from 'domains/config/components/DifficultySelector/styles';
import { useTranslation } from 'app/translation';
import type { Difficulty } from 'domains/config/data/store/types';

export const DifficultySelector = () => {
  const { currentDifficulty, switchDifficulty } = useConfig();
  const { t } = useTranslation();

  const Button = ({ difficulty }: { difficulty: Difficulty }) => {
    let Component = EasyButton;
    switch (difficulty) {
      case 'MEDIUM': {
        Component = MediumButton;
        break;
      }
      case 'HARD': {
        Component = HardButton;
        break;
      }
      default: {
        Component = EasyButton;
        break;
      }
    }
    return (
      <Component
        active={currentDifficulty === difficulty}
        disabled={currentDifficulty === difficulty}
        onPress={() => switchDifficulty(difficulty)}
      >
        <ButtonText>{t(`config.difficulty.${difficulty.toLowerCase()}.label`)}</ButtonText>
      </Component>
    );
  };

  return (
    <View>
      <Label>{t('config.difficulty.label')}</Label>
      <ButtonContainer>
        <Button difficulty="EASY" />
        <Button difficulty="MEDIUM" />
        <Button difficulty="HARD" />
      </ButtonContainer>
      <Description>
        {t(`config.difficulty.${currentDifficulty.toLowerCase()}.description`)}
      </Description>
    </View>
  );
};
