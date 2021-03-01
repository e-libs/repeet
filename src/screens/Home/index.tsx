import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'app/translation';
import { useSound } from 'app/media/sound/useSound';
import {
  ConfigContainer,
  FooterContainer,
  HeaderContainer,
  HistoryContainer,
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
  const config = useSound('open-config');
  const start = useSound('start');

  const openMenu = async () => {
    await config.play();
    navigation.navigate('Config');
  };

  const openHighScores = async () => {
    // TODO: change sound
    await config.play();
    navigation.navigate('HighScores');
  };

  const onStart = async () => {
    await start.play();
    navigation.navigate('Game');
  };

  return (
    <MainView>
      <StatusBar barStyle="dark-content" />
      <HeaderContainer>
        <HistoryContainer>
          <RotatingIcon degrees={360} onPress={openHighScores} icon={faCog} size={45} />
        </HistoryContainer>
        <ConfigContainer>
          <RotatingIcon onPress={openMenu} icon={faCog} size={45} />
        </ConfigContainer>
      </HeaderContainer>
      <HomeContainer>
        <TouchableOpacity onPress={onStart}>
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
