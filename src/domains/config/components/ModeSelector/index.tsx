import React from 'react';
import { useTranslation } from 'app/translation';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  Container,
  Description,
  Label,
} from 'domains/config/components/ModeSelector/styles';
import { ConfigButton } from 'domains/config/components/ConfigButton';

export const ModeSelector = () => {
  const { currentMode, switchMode } = useConfig();
  const { t } = useTranslation();
  const defaultButtonActive = currentMode === 'DEFAULT';

  return (
    <Container>
      <Label>{t('config.mode.label')}</Label>
      <ButtonContainer>
        <ConfigButton
          active={defaultButtonActive}
          color="#26bd53"
          disabled={defaultButtonActive}
          fontSize={25}
          isLeft
          onPress={switchMode}
          label={t('config.mode.default.label')}
        />
        <ConfigButton
          active={!defaultButtonActive}
          color="#fc972b"
          disabled={!defaultButtonActive}
          fontSize={25}
          isRight
          onPress={switchMode}
          label={t('config.mode.advanced.label')}
        />
      </ButtonContainer>
      <Description>{t(`config.mode.${currentMode.toLowerCase()}.description`)}</Description>
    </Container>
  );
};
