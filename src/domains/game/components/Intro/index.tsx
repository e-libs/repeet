import React, { useEffect } from 'react';
import { useTranslation } from 'app/translation';
import { useSound } from 'app/media/sound/useSound';
import {
  BottomSpacer,
  Container,
  GetReadyContainer,
  GetReadyLabel,
  Go,
  Timer,
  TimerContainer,
} from 'domains/game/components/Intro/styles';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { DifficultyLevels } from 'domains/game/data/modules/Game/constants';
import { useStatus } from 'domains/game/data/hooks/useStatus';
import { introDelay } from 'domains/game/data/modules/Timing/constants';
import { useCountdown } from 'helpers/useCountdown';

export const Intro = () => {
  const { currentDifficulty } = useConfig();
  const { t } = useTranslation();
  const { timer } = useCountdown(4);
  const { startGame } = useStatus();
  const go = useSound('countdown-go');
  const count = useSound('countdown');

  const timerContent = () => {
    if (timer === 4) return null;
    return timer > 0 ? <Timer>{timer}</Timer> : <Go>{t('game.intro.go')}</Go>;
  };

  useEffect(() => {
    if (timer === 0) {
      go.play();
      setTimeout(() => startGame(), introDelay);
    } else if (timer !== 4) {
      count.play();
    }
  }, [timer]);

  return (
    <Container color={DifficultyLevels[currentDifficulty].color}>
      <GetReadyContainer>
        <GetReadyLabel>{t('game.intro.getReady')}</GetReadyLabel>
      </GetReadyContainer>
      <TimerContainer>{timerContent()}</TimerContainer>
      <BottomSpacer />
    </Container>
  );
};
