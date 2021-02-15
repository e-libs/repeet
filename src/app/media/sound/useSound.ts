/* eslint-disable no-console */
import { logConfig, soundConfig } from 'app/config/constants';

export const useSound = (fileName: string) => {
  try {
    if (!soundConfig.enabled) return { play: () => {} };

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Sound = require('react-native-sound');
    Sound.setCategory('Playback');

    const { enabled } = logConfig;

    const sound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        if (enabled) console.log('failed to load the sound', error);
      } else if (enabled) console.log('sound okay');
    });

    const play = () =>
      sound.play((success: boolean) => {
        if (!success) {
          if (enabled) console.log('Sound did not play');
        }
      });

    return { play };
  } catch {
    return { play: () => {} };
  }
};
