import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import analysis, { AnalysisState, AnswersPayload } from './analysisSlice';
import { RootState } from '../../app/rootReducer';
import { theme } from '../../theme';
import { MOBILE_BREAK } from '../../theme/layout';

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
    <Section>
      <h1>質問一覧を表示する</h1>
      <QuestionList>
        {questions.slice(currentSliceStart, currentSliceEnd).map(question => (
          <li key={question.id}>
            <p>
              {question.id}. {question.text}
            </p>
            <ChoiceFieldset>
              <ChoiceList>
                {choices instanceof Array
                  ? choices.map(choice => (
                      <ChoiceListItem key={choice.value}>
                        <Radio
                          type="radio"
                          name={question.id.toString()}
                          value={choice.value}
                          onChange={onChanged}
                        />
                        <div>{choice.text}</div>
                      </ChoiceListItem>
                    ))
                  : ''}
              </ChoiceList>
            </ChoiceFieldset>
          </li>
        ))}
      </QuestionList>
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
    </Section>
  );
};

const Section = styled.div`
  align-items: center;
  justify-content: center;
  background-color: ${theme.bg.default};
  color: ${theme.text.default};
  display: flex;
  flex-direction: column;
`;

export const QuestionList = styled.ul`
  list-style-type: none;
  padding: 0 10px;
`;

export const ChoiceFieldset = styled.fieldset`
  border: 0;
`;

export const ChoiceList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0 -16px 16px;
  padding: 0 6px;
  flex: 1;
`;

export const ChoiceListItem = styled.li`
  position: relative;
  top: 1px;
  color: ${theme.text.alt}
  font-weight: 400;
  padding: 10px;
  font-size: 13px;

  &:hover {
    color: ${theme.text.default};
  }

  @media (max-width: ${MOBILE_BREAK}px) {
    font-size: 10px;
  }
`;

const Radio = styled.input``;

export default Analysis;
