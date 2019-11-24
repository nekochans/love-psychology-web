import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/counter';
import { CounterState } from '../reducers/counter';
import CounterComponent from '../components/Counter';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector<CounterState, number>(state => state.count);

  const handleDecrement = React.useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleIncrement = React.useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <CounterComponent
      count={count}
      decrement={handleDecrement}
      increment={handleIncrement}
    />
  );
};

export default Counter;
