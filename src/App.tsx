import React, { FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <header>
        <h1>カウンター</h1>
      </header>
      <div>
        <div>
          <h1>count</h1>
          <h2>{count}</h2>
        </div>
        <div>
          <button className="counter-button" type="button" onClick={decrement}>
            -1
          </button>
          <button className="counter-button" type="button" onClick={increment}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
