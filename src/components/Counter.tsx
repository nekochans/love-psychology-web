import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Counter.css';

export interface CounterProps {
  count?: number;
  decrement?: () => void;
  decrementAsync?: () => void;
  increment?: () => void;
  incrementAsync?: () => void;
}

const Counter: FC<CounterProps> = ({
  count = 0,
  decrement = () => {},
  decrementAsync = () => {},
  increment = () => {},
  incrementAsync = () => {},
}) => (
  <div>
    <header>
      <h1>カウンター</h1>
    </header>
    <div>
      <div>
        <h1>count</h1>
        <h2>{count}</h2>
      </div>
      <div>
        <button
          className="counter-button"
          type="button"
          onClick={decrementAsync}
        >
          -1 async
        </button>
        <button className="counter-button" type="button" onClick={decrement}>
          -1
        </button>
        <button className="counter-button" type="button" onClick={increment}>
          +1
        </button>
        <button
          className="counter-button"
          type="button"
          onClick={incrementAsync}
        >
          -1 async
        </button>
      </div>
      <div>
        <Link to="/">HOME</Link>
      </div>
    </div>
  </div>
);

export default Counter;
