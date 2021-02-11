import React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'app/translation';
import type { RootStackParamList } from 'screens/types';
import {
  BackButtonContainer,
  ConfigContainer,
  HeaderContainer,
  MainView,
  Title,
  TitleContainer,
} from 'screens/Config/styles';
import { BackButton } from 'domains/shell/components/BackButton';
import { ConfigPanel } from 'domains/config/components/ConfigPanel';

type ConfigScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Config'>;

type Props = {
  navigation: ConfigScreenNavigationProp;
};

export const Config = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const goBack = () => {
    navigation.navigate('Home');
  };

  return (
    <MainView>
      <HeaderContainer>
        <BackButtonContainer>
          <BackButton onPress={goBack} />
        </BackButtonContainer>
        <TitleContainer>
          <Title>{t('config.title')}</Title>
        </TitleContainer>
      </HeaderContainer>
      <ConfigContainer>
        <ConfigPanel />
      </ConfigContainer>
    </MainView>
  );
};
