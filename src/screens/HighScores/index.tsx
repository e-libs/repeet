import React from 'react';
import { StatusBar } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'app/translation';
import type { RootStackParamList } from 'screens/types';
import {
  BackButtonContainer,
  HighScoresContainer,
  HeaderContainer,
  MainView,
  Title,
  TitleContainer,
} from 'screens/HighScores/styles';
import { ForwardButton } from 'domains/shell/components/ForwardButton';
import { HighScoresPanel } from 'domains/history/components/HighScoresPanel';

type HighScoresScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HighScores'>;

type Props = {
  navigation: HighScoresScreenNavigationProp;
};

export const HighScores = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const goBack = () => {
    navigation.navigate('Home');
  };

  return (
    <MainView>
      <StatusBar barStyle="dark-content" />
      <HeaderContainer>
        <TitleContainer>
          <Title>{t('highScores.title')}</Title>
        </TitleContainer>
        <BackButtonContainer>
          <ForwardButton onPress={goBack} />
        </BackButtonContainer>
      </HeaderContainer>
      <HighScoresContainer>
        <HighScoresPanel />
      </HighScoresContainer>
    </MainView>
  );
};
