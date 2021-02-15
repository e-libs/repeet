import React from 'react';
import { useTranslation } from 'app/translation';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { ButtonContainer, Container, Label } from 'domains/config/components/SoundSelector/styles';
import { ConfigButton } from 'domains/config/components/ConfigButton';

export const SoundSelector = () => {
  const { isSoundOn, switchSound } = useConfig();
  const { t } = useTranslation();

  return (
    <Container>
      <Label>{t('config.sound.label')}</Label>
      <ButtonContainer>
        <ConfigButton
          active={!isSoundOn}
          color="#bd322d"
          disabled={!isSoundOn}
          fontSize={25}
          isLeft
          onPress={switchSound}
          label={t('config.sound.off')}
        />
        <ConfigButton
          active={isSoundOn}
          color="#26bd53"
          disabled={isSoundOn}
          fontSize={25}
          isRight
          onPress={switchSound}
          label={t('config.sound.on')}
        />
      </ButtonContainer>
    </Container>
  );
};
