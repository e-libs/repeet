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
  options: ConfigOption[];
  title: string;
};

export const ConfigSelector = ({ configType, options, title }: ConfigSelectorProps) => {
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
          active={isSelected}
          color={option.color}
          disabled={isSelected}
          fontSize={option.fontSize ?? 25}
          isLeft={i === 0}
          isRight={i === options.length - 1}
          key={i}
          onPress={onPress}
          label={option.label}
        />
      );

      if (isSelected && !!option.description) description = option.description;

      i += 1;

      return button;
    });
  };

  return (
    <Container>
      <Label>{title}</Label>
      <ButtonContainer>{buttons()}</ButtonContainer>
      {!!description && <Description>{description}</Description>}
    </Container>
  );
};
