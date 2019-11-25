import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterModule, { RootState } from '../redux/modules/counterModule';
import CounterComponent from '../components/Counter';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector<RootState, number>(state => state.counter.count);

  const handleDecrement = React.useCallback(() => {
    dispatch(counterModule.actions.decrement());
  }, [dispatch]);

  const handleIncrement = React.useCallback(() => {
    dispatch(counterModule.actions.increment);
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
