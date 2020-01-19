import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import analysis, { AnalysisState } from './analysisSlice';
import { RootState } from '../../app/rootReducer';

const Analysis: FC<{}> = () => {
  const dispatch = useDispatch();

  const analysisState = useSelector<RootState, AnalysisState>(
    state => state.analysis,
  );

  useEffect(() => {
    dispatch(analysis.actions.fetchQuestions());
    dispatch(analysis.actions.fetchChoices());
  }, [dispatch]);

  return (
    <div>
      <h1>質問一覧を表示する</h1>
      <ul>
        {analysisState.questions instanceof Array
          ? analysisState.questions.map(question => (
              <li key={question.id}>
                <p>{question.text}</p>
                <fieldset>
                  <ul>
                    {analysisState.choices instanceof Array
                      ? analysisState.choices.map(choice => (
                          <li key={choice.value}>
                            <input
                              type="radio"
                              name={question.id.toString()}
                              value={choice.value}
                            />
                            <div>{choice.text}</div>
                          </li>
                        ))
                      : ''}
                  </ul>
                </fieldset>
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};

export default Analysis;
