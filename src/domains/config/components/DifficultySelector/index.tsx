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

export const DifficultySelector = () => {
  const { currentDifficulty, switchDifficulty } = useConfig();
  const { t } = useTranslation();

  console.log('currentDifficulty', currentDifficulty);

  return (
    <View style={{ flex: 1 }}>
      <Label>{t('config.difficulty.label')}</Label>
      <ButtonContainer>
        <EasyButton
          active={currentDifficulty === 'EASY'}
          disabled={currentDifficulty === 'EASY'}
          onPress={() => switchDifficulty('EASY')}
        >
          <ButtonText>{t('config.difficulty.easy.label')}</ButtonText>
        </EasyButton>
        <MediumButton
          active={currentDifficulty === 'MEDIUM'}
          disabled={currentDifficulty === 'MEDIUM'}
          onPress={() => switchDifficulty('MEDIUM')}
        >
          <ButtonText>{t('config.difficulty.medium.label')}</ButtonText>
        </MediumButton>
        <HardButton
          active={currentDifficulty === 'HARD'}
          disabled={currentDifficulty === 'HARD'}
          onPress={() => switchDifficulty('HARD')}
        >
          <ButtonText>{t('config.difficulty.hard.label')}</ButtonText>
        </HardButton>
      </ButtonContainer>
      <Description>
        {t(`config.difficulty.${currentDifficulty.toLowerCase()}.description`)}
      </Description>
    </View>
  );
};
