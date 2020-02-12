import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import result, { ResultState } from './resultSlice';
import { RootState } from '../../app/rootReducer';
import ResultSection from './ResultSection';
import AllLoveTypesSection from './AllLoveTypesSection';
import Loading from '../../components/Loading';

const Result: FC<{}> = () => {
  const dispatch = useDispatch();

  const { loveType, allLoveTypes, isLoading } = useSelector<
    RootState,
    ResultState
  >(state => state.result);

  useEffect(() => {
    dispatch(result.actions.fetchResult());
    dispatch(result.actions.fetchAllLoveTypes());
  }, [dispatch]);

  const section = isLoading ? (
    <Loading />
  ) : (
    <div>
      {loveType && <ResultSection loveType={loveType} />}
      <AllLoveTypesSection loveTypes={allLoveTypes} />
    </div>
  );

  return <div>{section}</div>;
};

export default Result;
