import { useDispatch, useSelector } from 'react-redux';
import { loadShell } from 'domains/shell/data/store/actions';
import { getTest1 } from 'domains/shell/data/store/selectors';
import type { ShellAction } from 'domains/shell/data/store/types';

export const useShell = () => {
  const dispatch = useDispatch();

  const testAction = (payload: ShellAction) => dispatch(loadShell(payload));
  const testSelectorValue = useSelector(getTest1);

  return {
    testAction,
    testSelectorValue,
  };
};
