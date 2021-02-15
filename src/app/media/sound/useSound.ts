/* eslint-disable no-console */
import type { SoundType } from 'app/media/sound/types';
import { sound } from 'app/media/sound';

export const useSound = (soundType: SoundType) => sound[soundType]();
