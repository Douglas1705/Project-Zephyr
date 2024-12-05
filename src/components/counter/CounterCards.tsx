import { useState } from 'react';

function CounterCards() {
  const [count, setCount] = useState(1);
  const [error, setError] = useState('');

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      setError('');
    } else {
      setError('O valor deve ser entre 1 e 10.');
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setError('');
    } else {
      setError('O valor deve ser entre 1 e 10.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  return (
    <div className='w-auto'>
      <div className="flex w-36 px-3 py-4 border-2 border-gray-400 text-center justify-between gap-4 rounded-xl text-base mx-auto">
        <button onClick={handleDecrement}>-</button>
        <input
          type="text"
          value={count}
          onChange={handleInputChange}
          placeholder="1"
          className=" w-6 py-2 px-0 text-center"
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CounterCards;
