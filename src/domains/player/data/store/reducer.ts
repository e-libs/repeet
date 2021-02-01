import type { Action } from 'redux-actions';
import { SET_PLAYER } from 'domains/player/data/store/actionTypes';
import type { PlayerState, PlayerAction } from 'domains/player/data/store/types';

const initialState: PlayerState = {
  name: `John Doe ${new Date().toString()}`,
};

export const playerReducer = (state = initialState, action: Action<PlayerAction>) => {
  switch (action.type) {
    case SET_PLAYER: {
      const { name, lastName } = action.payload;

      return {
        ...state,
        name: `${name} ${lastName}`,
      };
    }
    default:
      return state;
  }
};
