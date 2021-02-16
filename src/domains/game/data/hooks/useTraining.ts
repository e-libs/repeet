import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { KEYPAD_EVENT } from 'domains/game/data/modules/Timing/constants';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { setTraining } from 'domains/game/data/store/actions';

export const useTraining = () => {
  const dispatch = useDispatch();

  const setReady = () => dispatch(setTraining({ isTraining: false }));

  useEffect(() => {
    Conductor.emit(KEYPAD_EVENT, true);
  }, []);

  return {
    setReady,
  };
};
