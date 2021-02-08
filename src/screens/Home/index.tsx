import React from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Image, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainView, TapToStart, HomeContainer, ConfigContainer } from 'screens/Home/styles';
import type { RootStackParamList } from 'screens/types';
import { useTranslation } from 'app/translation';
import { RotatingIcon } from 'domains/shell/components/RotatingIcon';

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
        <RotatingIcon onPress={openMenu} icon={faCog} size={45} />
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
