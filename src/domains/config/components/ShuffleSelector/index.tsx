import React from 'react';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  ButtonText,
  Container,
  OffButton,
  OnButton,
  Description,
  Label,
} from 'domains/config/components/ShuffleSelector/styles';
import { useTranslation } from 'app/translation';

export const ShuffleSelector = () => {
  const { isShuffle, switchShuffle } = useConfig();
  const { t } = useTranslation();

  return (
    <Container>
      <Label>{t('config.shuffle.label')}</Label>
      <ButtonContainer>
        <OffButton active={!isShuffle} disabled={!isShuffle} onPress={switchShuffle}>
          <ButtonText>{t('config.shuffle.off.label')}</ButtonText>
        </OffButton>
        <OnButton active={isShuffle} disabled={isShuffle} onPress={switchShuffle}>
          <ButtonText>{t('config.shuffle.on.label')}</ButtonText>
        </OnButton>
      </ButtonContainer>
      <Description>{t(`config.shuffle.${isShuffle ? 'on' : 'off'}.description`)}</Description>
    </Container>
  );
};
