import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { shellReducer } from 'domains/shell/data/store/reducer';
import { playerReducer } from 'domains/player/data/store/reducer';
import type { GlobalState } from 'app/store/types';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['shell'],
};

const combinedReducers = combineReducers<GlobalState>({
  shell: shellReducer, // will be persisted
  player: playerReducer, // won't be persisted
});

const persisted = persistReducer(rootPersistConfig, combinedReducers);

export const store = createStore(persisted);

export const persistor = persistStore(store);
