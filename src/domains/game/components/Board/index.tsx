import React, { useState } from 'react';
import {
  MainView,
  HeaderView,
  PlayerView,
  SequencerView,
  TimerView,
} from 'domains/game/components/Board/styles';
import { useGame } from 'domains/game/data/hooks/useGame';
import { Sequencer } from 'domains/game/components/Sequencer';
import { KeyPad } from 'domains/player/components/KeyPad';
import { StatusBar } from 'domains/game/components/StatusBar';
import { Header } from 'domains/game/components/Header';
import { logSequenceOutput } from 'helpers/logSequenceOutput';
import { GameOverModal } from 'domains/shell/components/GameOverModal';

type BoardProps = {
  onGoHome: () => void;
};

export const Board = ({ onGoHome }: BoardProps) => {
  const {
    addPlayerMove,
    attemptsLeft,
    currentSequence,
    hasQuit,
    isGameOver,
    level,
    playerSequence,
    quit,
    rightSequences,
    score,
    speed,
    reset,
  } = useGame();
  const [choseExit, setChoseExit] = useState(false);

  logSequenceOutput('CURRENT', currentSequence);
  logSequenceOutput('PLAYER ', playerSequence);
  console.log(
    `SPEED: ${speed}, SCORE: ${score}, LEVEL: ${level},  NAILED ${rightSequences}, ATTEMPTS ${attemptsLeft}`,
  );
  console.log('');

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

  return (
    <MainView>
      <GameOverModal
        isOpen={!hasQuit && isGameOver && !choseExit}
        onExit={goHome}
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
