import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Box } from 'domains/game/components/Sign/styles';
import type { AvailableSigns } from 'domains/game/data/modules/Sign';
// TODO: check the best import flow
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';

type SignProps = {
  sign: AvailableSigns;
};

export const Sign = ({ sign }: SignProps) => {
  useEffect(() => {
    const id = uuid();
    Conductor.on(sign.name, id, () => {
      console.log('COMPONENT BLINKING', sign.name);
    });
  }, []);

  return <Box sign={sign} />;
};
