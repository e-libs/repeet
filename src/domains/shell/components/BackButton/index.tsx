import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type BackButtonProps = {
  onPress: () => void;
};

export const BackButton = ({ onPress }: BackButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <FontAwesomeIcon color="#315f7e" icon={faChevronLeft} size={40} />
  </TouchableOpacity>
);
