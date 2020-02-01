import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import result, { ResultState } from './resultSlice';
import { RootState } from '../../app/rootReducer';

const Result: FC<{}> = () => {
  const dispatch = useDispatch();

  const { loveType } = useSelector<RootState, ResultState>(
    state => state.result,
  );

  useEffect(() => {
    dispatch(result.actions.fetchResult());
  }, [dispatch]);

  return (
    <div>
      <h1>診断結果を表示する</h1>
      {loveType && (
        <div>
          <p>{loveType.type}</p>
          <p>{loveType.description}</p>
          <p>{loveType.message}</p>
        </div>
      )}
    </div>
  );
};

export default Result;
