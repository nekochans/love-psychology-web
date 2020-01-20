import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import analysis, { AnalysisState, AnswersPayload } from './analysisSlice';
import { RootState } from '../../app/rootReducer';

type InputEvent = ChangeEvent<HTMLInputElement>;
type ChangeHandler = (e: InputEvent) => void;

const Analysis: FC<{}> = () => {
  const dispatch = useDispatch();

  const { questions, choices, perPage, disableNextButton } = useSelector<
    RootState,
    AnalysisState
  >(state => state.analysis);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentSliceStart, setCurrentSliceStart] = useState(0);
  const [currentSliceEnd, setCurrentSliceEnd] = useState(perPage);

  const pageCount = Math.ceil(questions.length / perPage);

  useEffect(() => {
    dispatch(analysis.actions.fetchQuestions());
    dispatch(analysis.actions.fetchChoices());
  }, [dispatch]);

  const onChanged: ChangeHandler = e => {
    const payload: AnswersPayload = {
      answer: {
        questionId: e.target.name,
        choiceId: e.target.value,
      },
      start: currentSliceStart,
      end: currentSliceEnd,
    };

    dispatch(analysis.actions.updateAnswers(payload));
  };

  const onClick = () => {
    setCurrentSliceStart(currentPage * perPage);
    setCurrentSliceEnd((currentPage + 1) * perPage);
    setCurrentPage(currentPage + 1);

    dispatch(analysis.actions.updateDisableNextButton(true));
  };

  return (
    <div>
      <h1>質問一覧を表示する</h1>
      <ul>
        {questions.slice(currentSliceStart, currentSliceEnd).map(question => (
          <li key={question.id}>
            <p>
              {question.id}. {question.text}
            </p>
            <fieldset>
              <ul>
                {choices instanceof Array
                  ? choices.map(choice => (
                      <li key={choice.value}>
                        <input
                          type="radio"
                          name={question.id.toString()}
                          value={choice.value}
                          onChange={onChanged}
                        />
                        <div>{choice.text}</div>
                      </li>
                    ))
                  : ''}
              </ul>
            </fieldset>
          </li>
        ))}
      </ul>
      {currentPage === pageCount ? (
        <Link
          to="/result"
          style={{ pointerEvents: disableNextButton ? 'none' : 'auto' }}
        >
          診断結果へ
        </Link>
      ) : (
        <button type="submit" disabled={disableNextButton} onClick={onClick}>
          次へ
        </button>
      )}
    </div>
  );
};

export default Analysis;
