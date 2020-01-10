import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import counter from './counterSlice';
import './Counter.css';

export interface CounterProps {
  count?: number;
  decrement?: () => void;
  decrementAsync?: () => void;
  increment?: () => void;
  incrementAsync?: () => void;
}

const Counter: FC<CounterProps> = () => {
  const dispatch = useDispatch();
  const count = useSelector<RootState, number>(state => state.counter.count);

  const decrement = React.useCallback(() => {
    dispatch(counter.actions.decrement());
  }, [dispatch]);

  const decrementAsync = React.useCallback(() => {
    dispatch(counter.actions.decrementAsync());
  }, [dispatch]);

  const increment = React.useCallback(() => {
    dispatch(counter.actions.increment());
  }, [dispatch]);

  const incrementAsync = React.useCallback(() => {
    dispatch(counter.actions.incrementAsync());
  }, [dispatch]);

  return (
    <div className="container">
      <div>
        <div>
          <h1>カウンター</h1>
          <h2>count</h2>
          <h3>{count}</h3>
        </div>
        <div>
          <Button type="button" onClick={decrementAsync}>
            -1 async
          </Button>
          <Button type="button" onClick={decrement}>
            -1
          </Button>
          <Button type="button" onClick={increment}>
            +1
          </Button>
          <Button type="button" onClick={incrementAsync}>
            -1 async
          </Button>
        </div>
        <div>
          <Link to="/">HOME</Link>
        </div>
      </div>
    </div>
  );
};

const Button = styled.button`
  margin: 10px;
`;

export default Counter;
