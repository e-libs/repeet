import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'domains/shell/components/BackButton/styles';

type BackButtonProps = {
  onPress: () => void;
};

export const BackButton = ({ onPress }: BackButtonProps) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <Icon>‹</Icon>
    </TouchableOpacity>
  </View>
);
