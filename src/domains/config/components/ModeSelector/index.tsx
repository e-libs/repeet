import React from 'react';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  AdvancedButton,
  ButtonContainer,
  ButtonText,
  Container,
  DefaultButton,
  Description,
  Label,
} from 'domains/config/components/ModeSelector/styles';
import { useTranslation } from 'app/translation';

export const ModeSelector = () => {
  const { currentMode, switchMode } = useConfig();
  const { t } = useTranslation();
  const defaultButtonActive = currentMode === 'DEFAULT';
  const advancedButtonActive = !defaultButtonActive;

  return (
    <Container>
      <Label>{t('config.mode.label')}</Label>
      <ButtonContainer>
        <DefaultButton
          active={defaultButtonActive}
          disabled={defaultButtonActive}
          onPress={switchMode}
        >
          <ButtonText>{t('config.mode.default.label')}</ButtonText>
        </DefaultButton>
        <AdvancedButton
          active={advancedButtonActive}
          disabled={advancedButtonActive}
          onPress={switchMode}
        >
          <ButtonText>{t('config.mode.advanced.label')}</ButtonText>
        </AdvancedButton>
      </ButtonContainer>
      <Description>{t(`config.mode.${currentMode.toLowerCase()}.description`)}</Description>
    </Container>
  );
};
