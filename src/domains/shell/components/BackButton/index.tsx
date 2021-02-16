import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useSound } from 'app/media/sound/useSound';

type BackButtonProps = {
  onPress: () => void;
};

export const BackButton = ({ onPress }: BackButtonProps) => {
  const { play } = useSound('button');

  const onBackButtonPress = async () => {
    await play();
    onPress();
  };

  return (
    <TouchableOpacity onPress={onBackButtonPress}>
      <FontAwesomeIcon color="#315f7e" icon={faChevronLeft} size={40} />
    </TouchableOpacity>
  );
};
