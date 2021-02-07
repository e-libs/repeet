import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from 'screens/types';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { ConfigContainer, HeaderContainer, MainView } from 'screens/Config/styles';
import { BackButton } from 'domains/shell/components/BackButton';

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
    <MainView>
      <HeaderContainer>
        <BackButton onPress={goBack} />
      </HeaderContainer>
      <ConfigContainer>
        <TouchableOpacity onPress={switchMode}>
          <Text style={{ marginTop: 50 }}>mode: {currentMode}</Text>
        </TouchableOpacity>
      </ConfigContainer>
    </MainView>
  );
};
