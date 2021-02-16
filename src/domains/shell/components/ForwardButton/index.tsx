import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSound } from 'app/media/sound/useSound';

type ForwardButtonProps = {
  onPress: () => void;
};

export const ForwardButton = ({ onPress }: ForwardButtonProps) => {
  const { play } = useSound('back');

  const onForwardButtonPress = async () => {
    await play();
    onPress();
  };

  return (
    <TouchableOpacity onPress={onForwardButtonPress}>
      <FontAwesomeIcon color="#315f7e" icon={faChevronRight} size={40} />
    </TouchableOpacity>
  );
};
