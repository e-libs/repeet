import React from 'react';
import { StatusBar } from 'react-native';
import { useTranslation } from 'app/translation';
import {
  HeaderView,
  MainView,
  PlayerView,
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

  const onReady = () => {
    setTimeout(() => setReady(), 500);
  };

  return (
    <MainView>
      <StatusBar barStyle="light-content" />
      <HeaderView>
        <Header isTraining onExit={exitGame} />
      </HeaderView>
      <SequencerView>
        <TrainingInstructions>
          <TrainingMessage>{t('training.message')}</TrainingMessage>
        </TrainingInstructions>
      </SequencerView>
      <ReadyView>
        <ForwardButton onPress={onReady} text={t('training.ready')} />
      </ReadyView>
      <PlayerView>
        <KeyPad />
      </PlayerView>
    </MainView>
  );
};
