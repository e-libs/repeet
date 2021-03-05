import type { ConfigRoute } from 'screens/Config/types';
import type { GameRoute } from 'screens/Game/types';
import type { HomeRoute } from 'screens/Home/types';
import type { HighScoresRoute } from 'screens/HighScores/types';

export type RootStackParamList = {
  Home: HomeRoute;
  HighScores: HighScoresRoute;
  Config: ConfigRoute;
  Game: GameRoute;
};
