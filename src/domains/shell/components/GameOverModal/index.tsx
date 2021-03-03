import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'app/translation';
import { useSound } from 'app/media/sound/useSound';
import {
  ButtonContainer,
  ButtonText,
  Container,
  ExitButton,
  FarewellMessage,
  FarewellMessageContainer,
  HiddenTextInput,
  HighScoresButton,
  Initial,
  InitialsMessage,
  InputContainer,
  ModalView,
  NewScoreContainer,
  PlayerLevel,
  PlayerScore,
  SaveButton,
  SavedMessage,
  SavedMessageContainer,
  SaveScoreContainer,
  SkipButton,
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
  const inputRef = useRef(null);

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
    onSave(initials.toUpperCase());
    setSaved(true);
  };

  const seeHighScores = async () => {
    await button.play();
    onSeeHighScores();
  };

  const changeText = (text: string) => {
    if (!/^[a-zA-Z]*$/.test(text)) return;
    if (text.length === 3) inputRef.current?.blur();
    setInitials(text);
  };

  const Button = (i: number) => (
    <Initial
      backgroundColor={initials[i] ? '#fff' : '#555'}
      borderColor={initials.length === i ? 'yellow' : 'green'}
      borderWidth={initials.length >= i ? 5 : 0}
      onPress={() => inputRef.current?.focus()}
    >
      {(initials[i] || '').toUpperCase()}
    </Initial>
  );

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
            <>
              <NewScoreContainer>
                <PlayerScore>{`${t('game.gameOver.score')} ${score}`}</PlayerScore>
                <PlayerLevel>{`${t('game.gameOver.level')} ${level}`}</PlayerLevel>
                <InitialsMessage>{t('game.gameOver.enterInitials')}</InitialsMessage>
                <InputContainer>
                  {Button(0)}
                  {Button(1)}
                  {Button(2)}
                  <HiddenTextInput
                    autoCompleteType="off"
                    autoCorrect={false}
                    maxLength={3}
                    onChangeText={changeText}
                    ref={inputRef}
                    value={initials}
                  ></HiddenTextInput>
                </InputContainer>
              </NewScoreContainer>
              <SaveScoreContainer>
                <SaveButton
                  disabled={initials.length < 3}
                  onPress={onSaveScore}
                  underlayColor="#adcb72"
                >
                  <ButtonText color={initials.length < 3 ? '#444' : '#000'}>
                    {t('game.gameOver.save')}
                  </ButtonText>
                </SaveButton>
                <SkipButton onPress={onSkip} underlayColor="#595959">
                  <ButtonText color="#ff3a3a">{t('game.gameOver.skip')}</ButtonText>
                </SkipButton>
              </SaveScoreContainer>
            </>
          )}
          {(saved || skip) && (
            <ButtonContainer>
              {saved && (
                <SavedMessageContainer>
                  <SavedMessage>{t('game.gameOver.saved')}</SavedMessage>
                </SavedMessageContainer>
              )}
              <HighScoresButton onPress={seeHighScores} underlayColor="#55d">
                <ButtonText color="#000">{t('game.gameOver.seeHighScores')}</ButtonText>
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
