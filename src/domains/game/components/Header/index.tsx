import React, { useState } from 'react';
import {
  BackButton,
  BackButtonIcon,
  Container,
  Score,
} from 'domains/game/components/Header/styles';
import { useScore } from 'domains/game/data/hooks/useScore';
import { ExitModal } from 'domains/shell/components/ExitModal';

export const Header = () => {
  const { score } = useScore();

  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const openExitModal = () => {
    setIsExitModalOpen(true);
  };

  const cancelExit = () => {
    setIsExitModalOpen(false);
  };

  const exitGame = () => {
    console.log('EXIT!');
  };

  return (
    <Container>
      <ExitModal isOpen={isExitModalOpen} onCancel={cancelExit} onExit={exitGame} />
      <BackButton onPress={openExitModal}>
        <BackButtonIcon>‹</BackButtonIcon>
      </BackButton>
      <Score>{score}</Score>
    </Container>
  );
};
