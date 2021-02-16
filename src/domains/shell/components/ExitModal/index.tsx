import React from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'app/translation';
import { useSound } from 'app/media/sound/useSound';
import {
  ButtonContainer,
  ButtonText,
  CancelButton,
  ConfirmButton,
  ConfirmText,
  Container,
  ModalView,
} from 'domains/shell/components/ExitModal/styles';

type ExitModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onExit: () => void;
};

export const ExitModal = ({ isOpen, onCancel, onExit }: ExitModalProps) => {
  const { t } = useTranslation();
  const button = useSound('button');
  const exitButton = useSound('exit');

  const cancel = async () => {
    await button.play();
    onCancel();
  };

  const exit = async () => {
    await exitButton.play();
    onExit();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onExit}>
      <Container>
        <ModalView>
          <ConfirmText>{t('header.exitModal.confirmExit')}</ConfirmText>
          <ButtonContainer>
            <CancelButton onPress={cancel} underlayColor="#3c535b">
              <ButtonText>{t('header.exitModal.no')}</ButtonText>
            </CancelButton>
            <ConfirmButton onPress={exit} underlayColor="#6d0d28">
              <ButtonText>{t('header.exitModal.yes')}</ButtonText>
            </ConfirmButton>
          </ButtonContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};
