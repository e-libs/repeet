import React from 'react';
import { useTranslation } from 'app/translation';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  Container,
  Description,
  Label,
} from 'domains/config/components/BlindSelector/styles';
import { ConfigButton } from 'domains/config/components/ConfigButton';

export const BlindSelector = () => {
  const { isBlindfolded, switchBlindMode } = useConfig();
  const { t } = useTranslation();

  return (
    <Container>
      <Label>{t('config.blind.label')}</Label>
      <ButtonContainer>
        <ConfigButton
          active={!isBlindfolded}
          color="#26bd53"
          disabled={!isBlindfolded}
          fontSize={25}
          isLeft
          onPress={switchBlindMode}
          label={t('config.blind.off.label')}
        />
        <ConfigButton
          active={isBlindfolded}
          color="#bd322d"
          disabled={isBlindfolded}
          fontSize={25}
          isRight
          onPress={switchBlindMode}
          label={t('config.blind.on.label')}
        />
      </ButtonContainer>
      <Description>{t(`config.blind.${isBlindfolded ? 'on' : 'off'}.description`)}</Description>
    </Container>
  );
};
