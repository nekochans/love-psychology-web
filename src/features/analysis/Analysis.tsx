import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Element, scroller, animateScroll as scroll } from 'react-scroll';
import analysis, { AnalysisState, AnswersPayload } from './analysisSlice';
import { RootState } from '../../app/rootReducer';
import { theme } from '../../theme';

type InputEvent = ChangeEvent<HTMLInputElement>;
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

  const onClick = () => {
    setCurrentSliceStart(currentPage * perPage);
    setCurrentSliceEnd((currentPage + 1) * perPage);
    setCurrentPage(currentPage + 1);

    dispatch(analysis.actions.updateDisableNextButton(true));

    scroll.scrollToTop({
      duration: 0,
    });
  };

  return (
    <Section>
      <Description>
        恋人や片思いの人を思い浮かべながら回答しましょう。
      </Description>
      <QuestionList>
        {questions.slice(currentSliceStart, currentSliceEnd).map(question => (
          <QuestionListItem key={question.id}>
            <Element name={question.id.toString()}>
              <QuestionTitle>
                Q{question.id}. {question.text}
              </QuestionTitle>
              <ChoiceFieldset>
                <ChoiceList>
                  {choices instanceof Array
                    ? choices.map(choice => (
                        <ChoiceListItem key={choice.value}>
                          <RadioIcon
                            checked={
                              choice.value === answers[question.id - 1].choiceId
                            }
                          >
                            <HiddenRadio
                              type="radio"
                              name={question.id.toString()}
                              value={choice.value}
                              onChange={onChanged}
                            />
                          </RadioIcon>
                          <RadioText>{choice.text}</RadioText>
                        </ChoiceListItem>
                      ))
                    : ''}
                </ChoiceList>
              </ChoiceFieldset>
            </Element>
          </QuestionListItem>
        ))}
      </QuestionList>
      {currentPage === pageCount ? (
        <ResultLink
          to="/result"
          disabled={disableNextButton}
          style={{ pointerEvents: disableNextButton ? 'none' : 'auto' }}
        >
          診断結果へ
        </ResultLink>
      ) : (
        <NextButton
          type="submit"
          disabled={disableNextButton}
          onClick={onClick}
        >
          次へ進む
        </NextButton>
      )}
    </Section>
  );
};

type RadioIconProps = {
  checked: boolean;
};

type NextButtonProps = {
  disabled: boolean;
};

type ResultLinkProps = {
  disabled: boolean;
};

const Section = styled.div`
  align-items: center;
  justify-content: center;
  background-color: ${theme.bg.default};
  color: ${theme.text.default};
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  color: ${theme.text.alt};
  font-size: 14px;
  margin: 4em auto 1em;
`;

const QuestionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const QuestionList = styled.ul`
  list-style-type: none;
  padding: 0 10px;
  margin: 30px 0 30px;
`;

export const QuestionListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 60px;
  }
`;

export const ChoiceFieldset = styled.fieldset`
  border: 0;
`;

export const ChoiceList = styled.ul`
  list-style-type: none;
  display: table;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 6px;
  width: 100%;
`;

export const ChoiceListItem = styled.li`
  display: table-cell;
`;

const RadioIcon = styled.label<RadioIconProps>`
  position: relative;
  display: block;
  width: 16vw;
  height: 16vw;
  max-width: 58px;
  max-height: 58px;
  margin: 0 auto 7px;
  padding: 0;
  border-radius: 100%;
  background-color: ${props =>
    props.checked ? theme.radio.dark : theme.radio.secondary};
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  text-align: center;
  transition: 0.2s;

  &:after {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 26px;
    height: 26px;
    margin: auto;
    border-radius: 100%;
    background-color: ${theme.bg.default};
    content: '';
  }

  &:hover {
    opacity: 0.8;
  }
`;

const RadioText = styled.div`
  width: 58px;
  margin: 0 auto;
  line-height: 1.3;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  color: ${theme.text.alt};
`;

const HiddenRadio = styled.input`
  display: none;
`;

export const NextButton = styled.button<NextButtonProps>`
  background-color: ${props =>
    props.disabled ? theme.colors.disabled : theme.colors.pink};
  border: none;
  color: ${theme.text.reverse};
  align-items: center;
  border-radius: 8px;
  margin: 24px 0 24px;
  padding: 16px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
`;

export const ResultLink = styled(Link)<ResultLinkProps>`
  background-color: ${props =>
    props.disabled ? theme.colors.disabled : theme.colors.pink};
  color: ${theme.text.reverse};
  align-items: center;
  border-radius: 8px;
  margin: 24px 0 24px;
  padding: 16px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
`;

export default Analysis;
