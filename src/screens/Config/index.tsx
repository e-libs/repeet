import React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from 'screens/types';
import { ConfigContainer, HeaderContainer, MainView } from 'screens/Config/styles';
import { BackButton } from 'domains/shell/components/BackButton';
import { ConfigPanel } from 'domains/config/components/ConfigPanel';

type ConfigScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Config'>;

type Props = {
  navigation: ConfigScreenNavigationProp;
};

export const Config = ({ navigation }: Props) => {
  const goBack = () => {
    navigation.navigate('Home');
  };

  return (
    <MainView>
      <HeaderContainer>
        <BackButton onPress={goBack} />
      </HeaderContainer>
      <ConfigContainer>
        <ConfigPanel />
      </ConfigContainer>
    </MainView>
  );
};
