import React from 'react';
import { View } from 'react-native';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  ButtonText,
  DefaultButton,
  Description,
  ExtendedButton,
  Label,
} from 'domains/config/components/ModeSelector/styles';
import { useTranslation } from 'app/translation';

export const ModeSelector = () => {
  const { currentMode, switchMode } = useConfig();
  const { t } = useTranslation();
  const defaultButtonActive = currentMode === 'DEFAULT';
  const extendedButtonActive = !defaultButtonActive;

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
        <ExtendedButton
          active={extendedButtonActive}
          disabled={extendedButtonActive}
          onPress={switchMode}
        >
          <ButtonText>{t('config.extended.label')}</ButtonText>
        </ExtendedButton>
      </ButtonContainer>
      <Description>{t(`config.${currentMode.toLowerCase()}.description`)}</Description>
    </View>
  );
};
