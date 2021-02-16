import { useAssets as useLocalAssets } from 'expo-asset';
import localAssets from 'assets/index';

export const useAssets = () => {
  const [assets] = useLocalAssets(localAssets);

  return { assets };
};
