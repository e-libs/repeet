import { useEffect, useState } from 'react';

export const useCountdown = (time: number) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (timer >= 1) {
      timerId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [timer]);

  return {
    isOver: timer === 0,
    timer,
  };
};
