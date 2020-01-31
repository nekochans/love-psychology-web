import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { scroller, animateScroll as scroll } from 'react-scroll';
import analysis, { AnalysisState, AnswersPayload } from './analysisSlice';
import { RootState } from '../../app/rootReducer';
import { theme } from '../../theme';
import QuestionList, { InputEvent } from './QuestionList';
import NextButton from './NextButton';

type ChangeHandler = (e: InputEvent) => void;

const Analysis: FC<{}> = () => {
  const dispatch = useDispatch();

  const {
    questions,
    choices,
    perPage,
    disableNextButton,
    answers,
  } = useSelector<RootState, AnalysisState>(state => state.analysis);

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

    const scrollTo = parseInt(e.target.name, 10) + 1;
    scroller.scrollTo(scrollTo.toString(), {
      duration: 350,
      delay: 100,
      smooth: true,
      offset: -140,
    });
  };

  const onNextClicked = () => {
    setCurrentSliceStart(currentPage * perPage);
    setCurrentSliceEnd((currentPage + 1) * perPage);
    setCurrentPage(currentPage + 1);

    dispatch(analysis.actions.updateDisableNextButton(true));

    scroll.scrollToTop({
      duration: 0,
    });
  };

  const onBackClicked = () => {};

  const nextButton =
    currentPage === pageCount ? (
      <NextButton to="/result" disabled={disableNextButton}>
        診断結果へ
      </NextButton>
    ) : (
      <NextButton onClick={onNextClicked} disabled={disableNextButton}>
        次へ進む
      </NextButton>
    );

  return (
    <Section>
      <Description>
        恋人や片思いの人を思い浮かべながら回答しましょう。
      </Description>
      <QuestionList
        questions={questions}
        choices={choices}
        answers={answers}
        currentSliceStart={currentSliceStart}
        currentSliceEnd={currentSliceEnd}
        onChanged={onChanged}
      />
      {nextButton}
      <BackButton onClick={onBackClicked}>戻る</BackButton>
    </Section>
  );
};

const Section = styled.div`
  align-items: center;
  background-color: ${theme.bg.default};
  color: ${theme.text.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled.p`
  color: ${theme.text.alt};
  font-size: 14px;
  margin: 4em auto 1em;
`;

const BackButton = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid ${theme.bg.border};
  border-radius: 8px;
  color: ${theme.text.secondary};
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 24px;
  padding: 8px;
  text-decoration: none;
`;

export default Analysis;
