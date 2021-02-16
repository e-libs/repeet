import React from 'react';
import { useTranslation } from 'app/translation';
import {
  HeaderView,
  MainView,
  PlayerView,
  ReadyButton,
  ReadyButtonContainer,
  ReadyButtonText,
  ReadyView,
  SequencerView,
  TrainingInstructions,
  TrainingMessage,
} from 'domains/game/components/TrainingBoard/styles';
import { Header } from 'domains/game/components/Header';
import { KeyPad } from 'domains/player/components/KeyPad';
import { useTraining } from 'domains/game/data/hooks/useTraining';
import { ForwardButton } from 'domains/shell/components/ForwardButton';

type TrainingBoardProps = {
  onGoHome: () => void;
};

export const TrainingBoard = ({ onGoHome }: TrainingBoardProps) => {
  const { setReady } = useTraining();
  const { t } = useTranslation();

  const exitGame = () => {
    onGoHome();
  };

  return (
    <MainView>
      <HeaderView>
        <Header isTraining onExit={exitGame} />
      </HeaderView>
      <SequencerView>
        <TrainingInstructions>
          <TrainingMessage>{t('training.message')}</TrainingMessage>
        </TrainingInstructions>
      </SequencerView>
      <ReadyView>
        <ReadyButton onPress={setReady}>
          <ReadyButtonText>{t('training.ready')}</ReadyButtonText>
        </ReadyButton>
        <ReadyButtonContainer>
          <ForwardButton onPress={setReady} />
        </ReadyButtonContainer>
      </ReadyView>
      <PlayerView>
        <KeyPad />
      </PlayerView>
    </MainView>
  );
};
