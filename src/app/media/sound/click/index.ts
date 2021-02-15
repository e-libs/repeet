/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { logConfig, soundConfig } from 'app/config/constants';
import { Audio } from 'expo-av';

export const useClick = () => {
  if (!soundConfig.enabled) return { play: async () => {} };

  const [sound1, setSound] = useState<Audio.Sound | null>(null);

  async function play() {
    if (logConfig.enabled) console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('assets/sounds/clickk.mp3'));
    setSound(sound);

    if (logConfig.enabled) console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(
    () =>
      sound1
        ? () => {
            console.log('Unloading Sound');
            sound1.unloadAsync();
          }
        : undefined,
    [sound1],
  );

  return { play };
};
