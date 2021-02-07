import type { ConfigRoute } from 'screens/Config/types';
import type { GameRoute } from 'screens/Game/types';
import type { HomeRoute } from 'screens/Home/types';

export type RootStackParamList = {
  Home: HomeRoute;
  Config: ConfigRoute;
  Game: GameRoute;
};
