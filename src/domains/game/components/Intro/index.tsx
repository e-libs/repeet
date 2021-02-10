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

type IntroProps = {
  secondsLeft: number;
};

export const Intro = ({ secondsLeft }: IntroProps) => {
  const { currentDifficulty } = useConfig();
  const { t } = useTranslation();

  let color = '#26bd53';
  if (currentDifficulty === 'MEDIUM') color = '#d6b222';
  if (currentDifficulty === 'HARD') color = '#bd322d';

  return (
    <Container color={color}>
      <GetReadyContainer>
        <GetReadyLabel>{t('game.intro.getReady')}</GetReadyLabel>
      </GetReadyContainer>
      <TimerContainer>
        {secondsLeft > 0 ? <Timer>{secondsLeft}</Timer> : <Go>{t('game.intro.go')}</Go>}
      </TimerContainer>
    </Container>
  );
};
