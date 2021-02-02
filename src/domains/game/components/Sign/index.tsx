import React from 'react';
import { Box } from 'domains/game/components/Sign/styles';
import type { AvailableSigns } from 'domains/game/data/modules/Sign';

type SignProps = {
  sign: AvailableSigns;
};

export const Sign = ({ sign }: SignProps) => <Box sign={sign} />;
