import React from 'react';
import { TouchableOpacity } from 'react-native';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  FooterContainer,
  MainView,
  TapToStart,
  HomeContainer,
  ConfigContainer,
} from 'screens/Home/styles';
import type { RootStackParamList } from 'screens/types';
import { useTranslation } from 'app/translation';
import { RotatingIcon } from 'domains/shell/components/RotatingIcon';
import { Footer } from 'domains/shell/components/Footer';
import { Logo } from 'domains/shell/components/Logo';

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
