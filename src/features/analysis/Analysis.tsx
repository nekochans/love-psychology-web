import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import analysis, { AnalysisState } from './analysisSlice';
import { RootState } from '../../app/rootReducer';

const Analysis: FC<{}> = () => {
  const dispatch = useDispatch();

  const questionsState = useSelector<RootState, AnalysisState>(
    state => state.question,
  );

  useEffect(() => {
    dispatch(analysis.actions.fetchQuestions());
  }, [dispatch]);

  return (
    <div>
      <h1>質問一覧を表示する</h1>
      <ul>
        {questionsState.questions instanceof Array
          ? questionsState.questions.map(question => (
              <li key={question.id}>{question.text}</li>
            ))
          : ''}
      </ul>
    </div>
  );
};

export default Analysis;
