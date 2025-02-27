import { useState, useCallback, useEffect, useRef } from 'react';

interface CounterCardsProps {
  initialCount: number;
  onCountChange: (_count: number) => void;
  className?: string;
}

function CounterCards({
  initialCount,
  onCountChange,
  className = '',
}: CounterCardsProps) {
  const [count, setCount] = useState(initialCount);
  const [error, setError] = useState('');
  const previousCount = useRef(initialCount);

  useEffect(() => {
    if (previousCount.current !== count) {
      onCountChange(count);
      previousCount.current = count;
    }
  }, [count, onCountChange]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount <= 10) {
        setError('');
        return newCount;
      } else {
        setError('values ​​from 1 to 10');
        return prevCount;
      }
    });
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount >= 1) {
        setError('');
        return newCount;
      } else {
        setError('values ​​from 1 to 10');
        return prevCount;
      }
    });
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 1 && value <= 10) {
        setCount(value);
        setError('');
      } else if (isNaN(value) || value < 1) {
        setError('O valor deve ser entre 1 e 10.');
      } else if (value > 10) {
        setCount(10);
        setError('O valor deve ser entre 1 e 10.');
      }
    },
    [],
  );

  return (
    <div
      className={`w-auto ${className} py-4 border-2 border-gray-400 rounded-xl`}
    >
      <div className="flex w-36 px-3 text-center justify-between gap-4 text-base mx-auto">
        <button onClick={handleDecrement}>-</button>
        <input
          type="text"
          value={count}
          onChange={handleInputChange}
          placeholder="1"
          className="w-6 py-2 px-0 text-center"
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CounterCards;
