import React from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'app/translation';
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

  return (
    <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onExit}>
      <Container>
        <ModalView>
          <FarewellMessage>{t('game.gameOver.message')}</FarewellMessage>
          <ButtonContainer>
            <TryAgainButton onPress={onTryAgain} underlayColor="#adcb72">
              <ButtonText color="#000">{t('game.gameOver.tryAgain')}</ButtonText>
            </TryAgainButton>
            <ExitButton onPress={onExit} underlayColor="#595959">
              <ButtonText color="#ff3a3a">{t('game.gameOver.exit')}</ButtonText>
            </ExitButton>
          </ButtonContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};
