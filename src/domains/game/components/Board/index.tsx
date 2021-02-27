import React, { useState } from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import {
  HeaderView,
  MainView,
  PlayerView,
  SequencerView,
  TimerView,
} from 'domains/game/components/Board/styles';
import { GameOverModal } from 'domains/shell/components/GameOverModal';
import { Header } from 'domains/game/components/Header';
import { KeyPad } from 'domains/player/components/KeyPad';
import { Sequencer } from 'domains/game/components/Sequencer';
import { StatusBar } from 'domains/game/components/StatusBar';
import { useGame } from 'domains/game/data/hooks/useGame';

type BoardProps = {
  onGoHome: () => void;
  onSeeHighScores: () => void;
};

export const Board = ({ onGoHome, onSeeHighScores }: BoardProps) => {
  const { addPlayerMove, hasQuit, isGameOver, quit, reset } = useGame();
  const [choseExit, setChoseExit] = useState(false);

  const goHome = () => {
    setChoseExit(true);
    onGoHome();
  };

  const tryAgain = () => {
    reset();
  };

  const exitGame = () => {
    quit();
    onGoHome();
  };

  const goToHighScores = () => {
    setChoseExit(true);
    onSeeHighScores();
  };

  return (
    <MainView>
      <RNStatusBar barStyle="light-content" />
      <GameOverModal
        isOpen={!hasQuit && isGameOver && !choseExit}
        onExit={goHome}
        onSeeHighScores={goToHighScores}
        onTryAgain={tryAgain}
      />
      <HeaderView>
        <Header isGameOver={isGameOver} onExit={exitGame} />
      </HeaderView>
      <SequencerView>
        <Sequencer />
      </SequencerView>
      <TimerView>
        <StatusBar />
      </TimerView>
      <PlayerView>
        <KeyPad onKeyPress={addPlayerMove} />
      </PlayerView>
    </MainView>
  );
};
