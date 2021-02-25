import React from 'react';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import {
  ButtonContainer,
  Container,
  Description,
  Label,
} from 'domains/config/components/ConfigSelector/styles';
import { ConfigButton } from 'domains/config/components/ConfigButton';
import type { ConfigType, ConfigOption } from 'domains/config/data/types';

type ConfigSelectorProps = {
  configType: ConfigType;
  disabled?: boolean;
  disabledReason?: string;
  options: ConfigOption[];
  title: string;
};

export const ConfigSelector = ({
  configType,
  disabled = false,
  disabledReason,
  options,
  title,
}: ConfigSelectorProps) => {
  const { config } = useConfig();
  const currentConfig = config[configType];
  let description: string | undefined = '';

  const buttons = () => {
    let i = 0;

    return options.map((option) => {
      const isSelected = currentConfig.value === option.value;

      const onPress = () => {
        if (option.param) currentConfig.action(option.param);
        else currentConfig.action();
      };

      const button = (
        <ConfigButton
          active={!disabled && isSelected}
          color={option.color}
          disabled={disabled || isSelected}
          fontSize={option.fontSize ?? 25}
          isLeft={i === 0}
          isRight={i === options.length - 1}
          key={i}
          onPress={onPress}
          optionDisabled={disabled}
          label={option.label}
        />
      );

      if (disabledReason) description = disabledReason;
      else if (isSelected && !!option.description) description = option.description;

      i += 1;

      return button;
    });
  };

  return (
    <Container>
      <Label disabled={disabled}>{title}</Label>
      <ButtonContainer>{buttons()}</ButtonContainer>
      {!!description && <Description disabled={disabled}>{description}</Description>}
    </Container>
  );
};
