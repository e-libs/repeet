import { useDispatch, useSelector } from 'react-redux';
import { addScore as addScoreAction, purgeScores } from 'domains/history/data/store/actions';
import { getRecords } from 'domains/history/data/store/selectors';
import type { HighScore } from 'domains/history/data/types';

export const useHistory = () => {
  const dispatch = useDispatch();

  const records = useSelector(getRecords);

  const addScore = (score: HighScore) => dispatch(addScoreAction({ newScore: score }));
  const purge = () => dispatch(purgeScores());

  return {
    addScore,
    purge,
    records,
  };
};
