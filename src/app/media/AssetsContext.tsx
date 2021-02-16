import React from 'react';
import type { Asset } from 'expo-asset';

type AssetsContext = {
  assets: Asset[] | null;
};

export const AssetsContext = React.createContext<AssetsContext>({ assets: null });
