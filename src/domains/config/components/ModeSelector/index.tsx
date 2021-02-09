import React from 'react';
import { View } from 'react-native';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  AdvancedButton,
  ButtonContainer,
  ButtonText,
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
    <View style={{ flex: 1 }}>
      <Label>{t('config.mode')}</Label>
      <ButtonContainer>
        <DefaultButton
          active={defaultButtonActive}
          disabled={defaultButtonActive}
          onPress={switchMode}
        >
          <ButtonText>{t('config.default.label')}</ButtonText>
        </DefaultButton>
        <AdvancedButton
          active={advancedButtonActive}
          disabled={advancedButtonActive}
          onPress={switchMode}
        >
          <ButtonText>{t('config.advanced.label')}</ButtonText>
        </AdvancedButton>
      </ButtonContainer>
      <Description>{t(`config.${currentMode.toLowerCase()}.description`)}</Description>
    </View>
  );
};
