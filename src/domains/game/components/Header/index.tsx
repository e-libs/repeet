import React, { useEffect, useState, useRef } from 'react';
import { Animated } from 'react-native';
import { BackButtonContainer, Container, Score } from 'domains/game/components/Header/styles';
import { useScore } from 'domains/game/data/hooks/useScore';
import { ExitModal } from 'domains/shell/components/ExitModal';
import { BackButton } from 'domains/shell/components/BackButton';

type HeaderProps = {
  isGameOver?: boolean;
  isTraining?: boolean;
  onExit: () => void;
};

export const Header = ({ isGameOver, isTraining = false, onExit }: HeaderProps) => {
  const { score } = useScore();
  const highlight = useRef(new Animated.Value(0)).current;

  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const openExitModal = () => {
    setIsExitModalOpen(true);
  };

  const cancelExit = () => {
    setIsExitModalOpen(false);
  };

  const exitGame = () => {
    setIsExitModalOpen(false);
    onExit();
  };

  useEffect(() => {
    setIsExitModalOpen(false);
  }, [isGameOver]);

  useEffect(() => {
    highlight.setValue(0);
    Animated.timing(highlight, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [score]);

  const color = highlight.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFF', '#E00'],
  });

  return (
    <Container>
      <ExitModal isOpen={isExitModalOpen} onCancel={cancelExit} onExit={exitGame} />
      <BackButtonContainer>
        <BackButton onPress={openExitModal} />
      </BackButtonContainer>
      {!isTraining && (
        <Animated.Text style={{ color }}>
          <Score>{score}</Score>
        </Animated.Text>
      )}
    </Container>
  );
};
