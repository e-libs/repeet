import React from 'react';
import { Modal, Text } from 'react-native';
import {
  ButtonText,
  CancelButton,
  ConfirmButton,
  Container,
  ModalView,
} from 'domains/shell/components/ExitModal/styles';

type ExitModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onExit: () => void;
};

export const ExitModal = ({ isOpen, onCancel, onExit }: ExitModalProps) => (
  <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onExit}>
    <Container>
      <ModalView>
        <Text>Exit game?</Text>
        <CancelButton onPress={onCancel}>
          <ButtonText>Cancel</ButtonText>
        </CancelButton>
        <ConfirmButton onPress={onExit}>
          <ButtonText>Yes</ButtonText>
        </ConfirmButton>
      </ModalView>
    </Container>
  </Modal>
);
