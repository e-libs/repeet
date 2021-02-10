import React from 'react';
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

type IntroProps = {
  secondsLeft: number;
};

export const Intro = ({ secondsLeft }: IntroProps) => {
  const { currentDifficulty } = useConfig();
  const { t } = useTranslation();

  return (
    <Container color={DifficultyLevels[currentDifficulty].color}>
      <GetReadyContainer>
        <GetReadyLabel>{t('game.intro.getReady')}</GetReadyLabel>
      </GetReadyContainer>
      <TimerContainer>
        {secondsLeft > 0 ? <Timer>{secondsLeft}</Timer> : <Go>{t('game.intro.go')}</Go>}
      </TimerContainer>
    </Container>
  );
};
