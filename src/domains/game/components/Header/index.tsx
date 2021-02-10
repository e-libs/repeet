import React, { useEffect, useState } from 'react';
import { BackButtonContainer, Container, Score } from 'domains/game/components/Header/styles';
import { useScore } from 'domains/game/data/hooks/useScore';
import { ExitModal } from 'domains/shell/components/ExitModal';
import { BackButton } from 'domains/shell/components/BackButton';

type HeaderProps = {
  isGameOver: boolean;
  onExit: () => void;
};

export const Header = ({ isGameOver, onExit }: HeaderProps) => {
  const { score } = useScore();

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

  return (
    <Container>
      <ExitModal isOpen={isExitModalOpen} onCancel={cancelExit} onExit={exitGame} />
      <BackButtonContainer>
        <BackButton onPress={openExitModal} />
      </BackButtonContainer>
      <Score>{score}</Score>
    </Container>
  );
};
