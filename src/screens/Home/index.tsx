import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainView, TapToStart, HomeContainer, ConfigContainer } from 'screens/Home/styles';
import type { RootStackParamList } from 'screens/types';
import { useTranslation } from 'app/translation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const openMenu = () => navigation.navigate('Config');

  return (
    <MainView>
      <ConfigContainer>
        <TouchableOpacity onPress={openMenu}>
          <Text style={{ fontSize: 40 }}>G</Text>
        </TouchableOpacity>
      </ConfigContainer>
      <HomeContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
          <Image
            resizeMode="contain"
            source={require('assets/images/logo.png')}
            style={{ width: 350, height: 120 }}
          />
          <TapToStart color="#427FA7">{t('home.tapToStart')}</TapToStart>
        </TouchableOpacity>
      </HomeContainer>
    </MainView>
  );
};
