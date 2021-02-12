import React from 'react';
import { useTranslation } from 'app/translation';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  Container,
  Description,
  Label,
} from 'domains/config/components/ShuffleSelector/styles';
import { ConfigButton } from 'domains/config/components/ConfigButton';

export const ShuffleSelector = () => {
  const { isShuffle, switchShuffle } = useConfig();
  const { t } = useTranslation();

  return (
    <Container>
      <Label>{t('config.shuffle.label')}</Label>
      <ButtonContainer>
        <ConfigButton
          active={!isShuffle}
          color="#26bd53"
          disabled={!isShuffle}
          fontSize={25}
          isLeft
          onPress={switchShuffle}
          label={t('config.shuffle.off.label')}
        />
        <ConfigButton
          active={isShuffle}
          color="#bd322d"
          disabled={isShuffle}
          fontSize={25}
          isRight
          onPress={switchShuffle}
          label={t('config.shuffle.on.label')}
        />
      </ButtonContainer>
      <Description>{t(`config.shuffle.${isShuffle ? 'on' : 'off'}.description`)}</Description>
    </Container>
  );
};
