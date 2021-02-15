/* eslint-disable no-console */
import type { SoundType } from 'app/media/sound/types';
import { sound } from 'app/media/sound';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const useSound = (soundType: SoundType) => {
  const { isSoundOn } = useConfig();
  return isSoundOn ? sound[soundType]() : { play: () => {} };
};
