import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainView, TapToStart } from 'screens/Home/styles';
import type { RootStackParamList } from 'screens/types';
import { useTranslation } from 'app/translation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: Props) => {
  const { t } = useTranslation();

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
    </MainView>
  );
};
