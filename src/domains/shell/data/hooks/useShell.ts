import { useDispatch } from 'react-redux';
import { loadShell } from 'domains/shell/data/store/actions';

export const useShell = () => {
  const dispatch = useDispatch();

  const testAction = (payload: any) => dispatch(loadShell(payload));

  return {
    testAction,
  };
};
