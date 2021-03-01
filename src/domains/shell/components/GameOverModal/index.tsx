import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, Text, TextInput } from 'react-native';
import { useTranslation } from 'app/translation';
import { useSound } from 'app/media/sound/useSound';
import {
  ButtonContainer,
  ButtonText,
  Container,
  ExitButton,
  FarewellMessage,
  FarewellMessageContainer,
  HighScoresButton,
  InitialsMessage,
  InputContainer,
  ModalView,
  NewScoreContainer,
  PlayerLevel,
  PlayerScore,
  SaveScoreContainer,
  TextContainer,
  TryAgainButton,
} from 'domains/shell/components/GameOverModal/styles';
import { useScore } from 'domains/game/data/hooks/useScore';
import { useLevel } from 'domains/game/data/hooks/useLevel';

type GameOverModalProps = {
  isOpen: boolean;
  onExit: () => void;
  onSave: (initials: string) => void;
  onSeeHighScores: () => void;
  onTryAgain: () => void;
};

export const GameOverModal = ({
  isOpen,
  onExit,
  onSave,
  onSeeHighScores,
  onTryAgain,
}: GameOverModalProps) => {
  const { t } = useTranslation();
  const gameOver = useSound('game-over');
  const button = useSound('button');
  const exitButton = useSound('exit');
  const { score } = useScore();
  const { level } = useLevel();
  // TODO: rollback after testing
  // const [skip, setSkip] = useState(score === 0);
  const [skip, setSkip] = useState(false);
  const [saved, setSaved] = useState(false);
  const [initials, setInitials] = useState('');

  const tryAgain = async () => {
    await button.play();
    onTryAgain();
  };

  const exit = async () => {
    await exitButton.play();
    onExit();
  };

  const onSkip = () => {
    setSkip(true);
  };

  const onSaveScore = () => {
    onSave(initials);
    setSaved(true);
  };

  const seeHighScores = async () => {
    await button.play();
    onSeeHighScores();
  };

  const changeText = (text: string) => {
    if (!/^[a-zA-Z]*$/.test(text)) return;
    setInitials(text);
  };

  useEffect(() => {
    if (isOpen) gameOver.play();
  }, [isOpen]);

  return (
    <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onExit}>
      <Container>
        <ModalView>
          <FarewellMessageContainer>
            <FarewellMessage>{t('game.gameOver.message')}</FarewellMessage>
          </FarewellMessageContainer>
          {!skip && !saved && (
            <NewScoreContainer>
              <TextContainer>
                <PlayerScore>score: {score}</PlayerScore>
                <PlayerLevel>level: {level}</PlayerLevel>
                <InitialsMessage>Enter your initials</InitialsMessage>
              </TextContainer>
              <InputContainer>
                <TextInput
                  autoCompleteType="off"
                  value={initials}
                  onChangeText={changeText}
                  maxLength={3}
                  style={{ backgroundColor: '#fff', fontSize: 50, width: 120, textAlign: 'center' }}
                ></TextInput>
              </InputContainer>
              <SaveScoreContainer>
                <TouchableOpacity onPress={onSaveScore}>
                  <Text style={{ color: 'red' }}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSkip}>
                  <Text style={{ color: 'red' }}>skip</Text>
                </TouchableOpacity>
              </SaveScoreContainer>
            </NewScoreContainer>
          )}
          {(saved || skip) && (
            <ButtonContainer>
              {saved && <Text style={{ color: 'red' }}>Saved!</Text>}
              <HighScoresButton onPress={seeHighScores} underlayColor="#55d">
                <ButtonText color="#000">See high scores</ButtonText>
              </HighScoresButton>
              <TryAgainButton onPress={tryAgain} underlayColor="#adcb72">
                <ButtonText color="#000">{t('game.gameOver.tryAgain')}</ButtonText>
              </TryAgainButton>
              <ExitButton onPress={exit} underlayColor="#595959">
                <ButtonText color="#ff3a3a">{t('game.gameOver.exit')}</ButtonText>
              </ExitButton>
            </ButtonContainer>
          )}
        </ModalView>
      </Container>
    </Modal>
  );
};
