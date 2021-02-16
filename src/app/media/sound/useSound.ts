import { useContext } from 'react';
import { useSoundPlayer } from 'app/media/sound/useSoundPlayer';
import type { SoundType } from 'app/media/sound/types';
import { AssetsContext } from 'app/media/AssetsContext';
import { useIsMounted } from 'helpers/useIsMounted';

export const useSound = (soundType: SoundType) => {
  const { assets } = useContext(AssetsContext);
  const isMounted = useIsMounted();

  return isMounted && assets
    ? useSoundPlayer(assets.find((sound) => sound.name === soundType))
    : { play: async () => {} };
};
