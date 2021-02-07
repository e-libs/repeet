import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from 'screens/types';
import { useConfig } from 'domains/config/data/hooks/useConfig';

type ConfigScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Config'>;

type Props = {
  navigation: ConfigScreenNavigationProp;
};

export const Config = ({ navigation }: Props) => {
  const { currentMode, switchMode } = useConfig();

  const goBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity onPress={goBack}>
        <Text>Config</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={switchMode}>
        <Text style={{ marginTop: 50 }}>mode: {currentMode}</Text>
      </TouchableOpacity>
    </View>
  );
};
