import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainView } from 'screens/Home/styles';
import type { RootStackParamList } from 'screens/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: Props) => (
  <MainView color="#FFF">
    <TouchableOpacity onPress={() => navigation.navigate('Game')}>
      <Image
        resizeMode="contain"
        source={require('assets/images/logo.png')}
        style={{ width: 350, height: 120 }}
      />
    </TouchableOpacity>
  </MainView>
);
