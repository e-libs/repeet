import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainView, TapToStart } from 'screens/Home/styles';
import type { RootStackParamList } from 'screens/types';
import { useTranslation } from 'app/translation';
import { useConfig } from 'domains/config/data/hooks/useConfig';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const { currentMode, switchMode } = useConfig();

  return (
    <MainView>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Image
          resizeMode="contain"
          source={require('assets/images/logo.png')}
          style={{ width: 350, height: 120 }}
        />
        <TapToStart color="#427FA7">{t('home.tapToStart')}</TapToStart>
      </TouchableOpacity>
      <TouchableOpacity onPress={switchMode}>
        <Text style={{ marginTop: 50 }}>mode: {currentMode}</Text>
      </TouchableOpacity>
    </MainView>
  );
};
