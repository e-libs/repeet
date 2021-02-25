import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useTranslation } from 'app/translation';
import { Container, Label } from 'domains/game/components/Level/styles';
import { useLevel } from 'domains/game/data/hooks/useLevel';

export const Level = () => {
  const { t } = useTranslation();
  const { level } = useLevel();
  const highlight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    highlight.setValue(0);
    Animated.timing(highlight, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [level]);

  const color = highlight.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFF', '#77f'],
  });

  return (
    <Container>
      <Animated.Text style={{ color }}>
        <Label>
          {t('game.status.level')} {level}
        </Label>
      </Animated.Text>
    </Container>
  );
};
