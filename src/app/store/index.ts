import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import type { GlobalState } from 'app/store/types';
import { configReducer } from 'domains/config/data/store/reducer';
import { gameReducer } from 'domains/game/data/store/reducer';
import { playerReducer } from 'domains/player/data/store/reducer';
import { shellReducer } from 'domains/shell/data/store/reducer';
import { historyReducer } from 'domains/history/data/store/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['shell', 'config', 'history'],
  whitelist: ['shell', 'config'],
};

const combinedReducers = combineReducers<GlobalState>({
  config: configReducer,
  game: gameReducer,
  history: historyReducer,
  player: playerReducer,
  shell: shellReducer,
});

const persisted = persistReducer(rootPersistConfig, combinedReducers);

export const store = createStore(persisted);

export const persistor = persistStore(store);
