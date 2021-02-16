import { useContext } from 'react';
import { useSoundPlayer } from 'app/media/sound/useSoundPlayer';
import type { SoundType } from 'app/media/sound/types';
import { AssetsContext } from 'app/media/AssetsContext';

export const useSound = (soundType: SoundType) => {
  const { assets } = useContext(AssetsContext);

  return assets
    ? useSoundPlayer(assets.find((sound) => sound.name === soundType))
    : { play: async () => {} };
};
