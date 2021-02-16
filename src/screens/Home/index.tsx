import React from 'react';
import { TouchableOpacity } from 'react-native';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'app/translation';
import { useSound } from 'app/media/sound/useSound';
import {
  ConfigContainer,
  FooterContainer,
  HomeContainer,
  MainView,
  TapToStart,
} from 'screens/Home/styles';
import type { RootStackParamList } from 'screens/types';
import { RotatingIcon } from 'domains/shell/components/RotatingIcon';
import { Footer } from 'domains/shell/components/Footer';
import { Logo } from 'domains/shell/components/Logo';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { play } = useSound('open-config');

  const openMenu = async () => {
    await play();
    navigation.navigate('Config');
  };

  return (
    <MainView>
      <ConfigContainer>
        <RotatingIcon onPress={openMenu} icon={faCog} size={45} />
      </ConfigContainer>
      <HomeContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
          <Logo />
          <TapToStart color="#427FA7">{t('home.tapToStart')}</TapToStart>
        </TouchableOpacity>
      </HomeContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainView>
  );
};
