import React, { useEffect } from 'react';
import {
  Container,
  GetReadyContainer,
  GetReadyLabel,
  Go,
  Timer,
  TimerContainer,
} from 'domains/game/components/Intro/styles';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { useTranslation } from 'app/translation';
import { DifficultyLevels } from 'domains/game/data/modules/Game/constants';
import { useCountdown } from 'helpers/useCountdown';
import { useStatus } from 'domains/game/data/hooks/useStatus';
import { introDelay } from 'domains/game/data/modules/Timing/constants';

export const Intro = () => {
  const { currentDifficulty } = useConfig();
  const { t } = useTranslation();
  const { timer } = useCountdown(3);
  const { startGame } = useStatus();

  useEffect(() => {
    if (timer === 0) setTimeout(() => startGame(), introDelay);
  }, [timer]);

  return (
    <Container color={DifficultyLevels[currentDifficulty].color}>
      <GetReadyContainer>
        <GetReadyLabel>{t('game.intro.getReady')}</GetReadyLabel>
      </GetReadyContainer>
      <TimerContainer>
        {timer > 0 ? <Timer>{timer}</Timer> : <Go>{t('game.intro.go')}</Go>}
      </TimerContainer>
    </Container>
  );
};
