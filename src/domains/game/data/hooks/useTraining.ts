import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { KEYPAD_EVENT } from 'domains/game/data/modules/Timing/constants';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';

export const useTraining = () => {
  const dispatch = useDispatch();

  const addTrainingMove = (id: number) => {
    console.log('twinkle', id);
    // TODO: twinkle sequencer
  };

  useEffect(() => {
    Conductor.emit(KEYPAD_EVENT, true);
  }, []);

  return {
    addTrainingMove,
  };
};
