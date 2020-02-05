import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import result, { ResultState } from './resultSlice';
import { RootState } from '../../app/rootReducer';
import ResultSection from './ResultSection';
import AllLoveTypesSection from './AllLoveTypesSection';
import { theme } from '../../theme';

const Result: FC<{}> = () => {
  const dispatch = useDispatch();

  const { loveType, allLoveTypes } = useSelector<RootState, ResultState>(
    state => state.result,
  );

  useEffect(() => {
    dispatch(result.actions.fetchResult());
    dispatch(result.actions.fetchAllLoveTypes());
  }, [dispatch]);

  return (
    <Section>
      {loveType && <ResultSection loveType={loveType} />}
      <AllLoveTypesSection loveTypes={allLoveTypes} />
    </Section>
  );
};

const Section = styled.div`
  background-color: ${theme.bg.default};
  color: ${theme.text.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Result;
