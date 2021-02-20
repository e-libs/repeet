import React from 'react';
import { ButtonText, Button } from 'domains/config/components/ConfigButton/styles';
import { useSound } from 'app/media/sound/useSound';

type ConfigButtonProps = {
  active: boolean;
  color: string;
  disabled: boolean;
  fontSize?: number;
  isLeft?: boolean;
  isRight?: boolean;
  label: string;
  onPress: () => void;
  optionDisabled: boolean;
};

export const ConfigButton = ({
  active,
  color,
  disabled,
  fontSize = 20,
  isLeft = false,
  isRight = false,
  label,
  onPress,
  optionDisabled,
}: ConfigButtonProps) => {
  const { play } = useSound('click');
  const onButtonPress = async () => {
    await play();
    onPress();
  };

  return (
    <Button
      active={active}
      color={color}
      disabled={disabled}
      isLeft={isLeft}
      isRight={isRight}
      onPress={onButtonPress}
    >
      <ButtonText fontColor={optionDisabled ? '#888' : '#fff'} fontSize={fontSize}>
        {label}
      </ButtonText>
    </Button>
  );
};
