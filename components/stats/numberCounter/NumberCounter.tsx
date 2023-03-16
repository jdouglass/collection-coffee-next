'use client';

import { useEffect, useState } from 'react';

export interface INumberCounter {
  value: number;
}

const easeOutQuad = (t: number, b: number, c: number, d: number) => {
  t = t > d ? d : t / d;
  return Math.round(-c * t * (t - 2) + b);
};

const NumberCounter: React.FC<INumberCounter> = ({
  value,
}: {
  value: number;
}) => {
  const start = 0;
  const duration = 2700;

  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | undefined;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / duration;
      const currentCount = easeOutQuad(progress, 0, value, 1);
      if (currentCount >= value) {
        setCount(value);
        return;
      }
      setCount(currentCount);
      requestAnimationFrame(animateCount);
    };
    requestAnimationFrame(animateCount);
  }, [value, duration]);

  return <p>{Intl.NumberFormat().format(count)}</p>;
};

export default NumberCounter;
