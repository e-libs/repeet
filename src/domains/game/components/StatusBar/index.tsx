import React from 'react';
import { View } from 'react-native';
import { AttemptsDial } from 'domains/game/components/AttemptsDial';
import { Timer } from 'domains/game/components/Timer';
import { Container } from 'domains/game/components/StatusBar/styles';

export const StatusBar = () => (
  <Container>
    <View>
      <Timer />
    </View>
    <View style={{ right: 20, position: 'absolute' }}>
      <AttemptsDial />
    </View>
  </Container>
);
