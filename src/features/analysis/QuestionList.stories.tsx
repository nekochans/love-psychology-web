import React from 'react';
import QuestionList from './QuestionList';

export default {
  title: 'QuestionList',
};

const props = {
  questions: [
    {
      id: 1,
      text: '私にとって○○さんとの関係よりも大切なものなど他にはない',
    },
    {
      id: 2,
      text: '私と○○さんとの関わりは揺るぎないものである',
    },
    {
      id: 3,
      text: '○○さんは私にとって非常に魅力的な人だ',
    },
    {
      id: 4,
      text: '○○さんとの関係は居心地のよいものである',
    },
    {
      id: 5,
      text: '○○さんについて空想にふけることがある',
    },
  ],
  choices: [
    { value: '1', text: 'とても当てはまる' },
    { value: '2', text: 'やや当てはまる' },
    { value: '3', text: 'どちらともいえない' },
    { value: '4', text: 'あまり当てはまらない' },
    { value: '5', text: '全く当てはまらない' },
  ],
  answers: [
    { questionId: '1', choiceId: '1' },
    { questionId: '2', choiceId: '2' },
    { questionId: '3', choiceId: '' },
    { questionId: '4', choiceId: '' },
    { questionId: '5', choiceId: '' },
  ],
  currentSliceStart: 0,
  currentSliceEnd: 5,
};

export const showApp = () => <QuestionList {...props} />;

showApp.story = {
  name: 'QuestionList',
};
