import { createAction } from 'redux-actions';
import type {
  InitGameAction,
  MoveAction,
  NextRoundAction,
  SetSequenceAction,
  StartGameAction,
  SetTrainingAction,
} from 'domains/game/data/store/types';
import {
  INCREASE_SCORE,
  INIT_GAME,
  MAKE_MOVE,
  NEXT_ROUND,
  QUIT_GAME,
  RESET_GAME,
  RESET_MOVE,
  SET_SEQUENCE,
  SET_TRAINING,
  START_GAME,
} from 'domains/game/data/store/actionTypes';

export const increaseScore = createAction(INCREASE_SCORE);
export const initGame = createAction<InitGameAction>(INIT_GAME);
export const makeMove = createAction<MoveAction>(MAKE_MOVE);
export const nextRound = createAction<NextRoundAction>(NEXT_ROUND);
export const quitGame = createAction(QUIT_GAME);
export const resetGame = createAction(RESET_GAME);
export const resetMove = createAction(RESET_MOVE);
export const setSequence = createAction<SetSequenceAction>(SET_SEQUENCE);
export const setTraining = createAction<SetTrainingAction>(SET_TRAINING);
export const startGame = createAction<StartGameAction>(START_GAME);
