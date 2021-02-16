import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'app/translation';
import { useSound } from 'app/media/sound/useSound';
import {
  ButtonContainer,
  ButtonText,
  Container,
  ExitButton,
  FarewellMessage,
  ModalView,
  TryAgainButton,
} from 'domains/shell/components/GameOverModal/styles';

type GameOverModalProps = {
  isOpen: boolean;
  onExit: () => void;
  onTryAgain: () => void;
};

export const GameOverModal = ({ isOpen, onExit, onTryAgain }: GameOverModalProps) => {
  const { t } = useTranslation();
  const gameOver = useSound('game-over');
  const button = useSound('button');
  const exitButton = useSound('exit');

  const tryAgain = async () => {
    await button.play();
    onTryAgain();
  };

  const exit = async () => {
    await exitButton.play();
    onExit();
  };

  useEffect(() => {
    if (isOpen) gameOver.play();
  }, [isOpen]);

  return (
    <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onExit}>
      <Container>
        <ModalView>
          <FarewellMessage>{t('game.gameOver.message')}</FarewellMessage>
          <ButtonContainer>
            <TryAgainButton onPress={tryAgain} underlayColor="#adcb72">
              <ButtonText color="#000">{t('game.gameOver.tryAgain')}</ButtonText>
            </TryAgainButton>
            <ExitButton onPress={exit} underlayColor="#595959">
              <ButtonText color="#ff3a3a">{t('game.gameOver.exit')}</ButtonText>
            </ExitButton>
          </ButtonContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};
