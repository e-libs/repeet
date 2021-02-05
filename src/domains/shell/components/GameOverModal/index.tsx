import React from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'app/translation';
import {
  ButtonContainer,
  ButtonText,
  TryAgainButton,
  ExitButton,
  FarewellMessage,
  Container,
  ModalView,
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
          <FarewellMessage>{t('gameOver.message')}</FarewellMessage>
          <ButtonContainer>
            <TryAgainButton onPress={onTryAgain}>
              <ButtonText color="#000">{t('gameOver.tryAgain')}</ButtonText>
            </TryAgainButton>
            <ExitButton onPress={onExit}>
              <ButtonText color="#ff3a3a">{t('gameOver.exit')}</ButtonText>
            </ExitButton>
          </ButtonContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};