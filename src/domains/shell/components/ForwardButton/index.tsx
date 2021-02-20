import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSound } from 'app/media/sound/useSound';
import { Button, ButtonText } from 'domains/shell/components/ForwardButton/styles';

type ForwardButtonProps = {
  onPress: () => void;
  text?: string;
};

export const ForwardButton = ({ onPress, text }: ForwardButtonProps) => {
  const { play } = useSound('button');

  const onForwardButtonPress = async () => {
    await play();
    onPress();
  };

  return (
    <Button onPress={onForwardButtonPress}>
      {!!text && <ButtonText>{text}</ButtonText>}
      <FontAwesomeIcon color="#315f7e" icon={faChevronRight} size={40} />
    </Button>
  );
};
