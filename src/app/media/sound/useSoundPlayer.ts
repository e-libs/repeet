/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import type { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import { logConfig, soundConfig } from 'app/config/constants';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const useSoundPlayer = (asset: Asset | undefined) => {
  const { isSoundOn } = useConfig();

  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);

  async function play() {
    try {
      if (asset) {
        const { sound } = await Audio.Sound.createAsync(asset, { shouldPlay: true });
        setCurrentSound(sound);
        await sound.playAsync();
      }
    } catch (ex) {
      if (logConfig.enabled) console.log('ERROR WHILE LOADING SOUND', asset?.name, ex);
    }
  }

  useEffect(
    () =>
      currentSound
        ? () => {
            try {
              currentSound.unloadAsync();
            } catch {
              if (logConfig.enabled) console.log('ERROR WHILE UNLOADING SOUND');
            }
          }
        : undefined,
    [currentSound],
  );

  return { play: isSoundOn && soundConfig.enabled ? play : async () => {} };
};
