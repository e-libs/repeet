import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import type { GlobalState } from 'app/store/types';
import { gameReducer } from 'domains/game/data/store/reducer';
import { playerReducer } from 'domains/player/data/store/reducer';
import { shellReducer } from 'domains/shell/data/store/reducer';
import { configReducer } from 'domains/config/data/store/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['shell', 'config'],
};

const combinedReducers = combineReducers<GlobalState>({
  game: gameReducer,
  player: playerReducer,
  shell: shellReducer,
  config: configReducer,
});

const persisted = persistReducer(rootPersistConfig, combinedReducers);

export const store = createStore(persisted);

export const persistor = persistStore(store);
