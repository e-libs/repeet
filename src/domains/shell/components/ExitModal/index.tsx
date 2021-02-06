import React from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'app/translation';
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

  return (
    <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onExit}>
      <Container>
        <ModalView>
          <ConfirmText>{t('header.exitModal.confirmExit')}</ConfirmText>
          <ButtonContainer>
            <CancelButton onPress={onCancel} underlayColor="#3c535b">
              <ButtonText>{t('header.exitModal.no')}</ButtonText>
            </CancelButton>
            <ConfirmButton onPress={onExit} underlayColor="#6d0d28">
              <ButtonText>{t('header.exitModal.yes')}</ButtonText>
            </ConfirmButton>
          </ButtonContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};
