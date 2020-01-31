import React, { ChangeEvent, FC } from 'react';
import { Element } from 'react-scroll/modules';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Answer, Choice, Question } from '../../domain/analysis';

export type InputEvent = ChangeEvent<HTMLInputElement>;

type Props = {
  questions: Question[];
  choices: Choice[];
  answers: Answer[];
  currentSliceStart: number;
  currentSliceEnd: number;
  onChanged?: (e: InputEvent) => void;
};

const QuestionList: FC<Props> = ({
  questions,
  choices,
  answers,
  currentSliceStart,
  currentSliceEnd,
  onChanged,
}: Props) => {
  return (
    <StyledQuestionList>
      {questions.slice(currentSliceStart, currentSliceEnd).map(question => (
        <QuestionListItem key={question.id}>
          <Element name={question.id.toString()}>
            <QuestionTitle>
              Q{question.id}. {question.text}
            </QuestionTitle>
            <ChoiceFieldset>
              <ChoiceList>
                {choices.map(choice => (
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
                ))}
              </ChoiceList>
            </ChoiceFieldset>
          </Element>
        </QuestionListItem>
      ))}
    </StyledQuestionList>
  );
};

type RadioIconProps = {
  checked: boolean;
};

const QuestionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const StyledQuestionList = styled.ul`
  list-style-type: none;
  margin: 30px 0 30px;
  padding: 0 10px;
`;

const QuestionListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 60px;
  }
`;

const ChoiceFieldset = styled.fieldset`
  border: 0;
`;

const ChoiceList = styled.ul`
  display: table;
  list-style-type: none;
  margin: 0 auto;
  max-width: 375px;
  padding: 0 6px;
  width: 100%;
`;

const ChoiceListItem = styled.li`
  display: table-cell;
`;

const RadioIcon = styled.label<RadioIconProps>`
  background-color: ${props =>
    props.checked ? theme.radio.dark : theme.radio.secondary};
  border-radius: 100%;
  cursor: pointer;
  display: block;
  font-size: inherit;
  font-weight: inherit;
  height: 16vw;
  margin: 0 auto 7px;
  max-height: 58px;
  max-width: 58px;
  padding: 0;
  position: relative;
  text-align: center;
  transition: 0.2s;
  width: 16vw;

  &::after {
    background-color: ${theme.bg.default};
    border-radius: 100%;
    bottom: 0;
    content: '';
    height: 26px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 26px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const RadioText = styled.div`
  color: ${theme.text.alt};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 auto;
  text-align: center;
  width: 58px;
`;

const HiddenRadio = styled.input`
  display: none;
`;

export default QuestionList;
