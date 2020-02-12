import React from 'react';
import ResultSection from './ResultSection';

export default {
  title: 'ResultSection',
};

const props = {
  loveType: {
    id: 1,
    type: '非愛タイプ',
    description: '全ての要素が足りない。表面的な人間関係',
    message:
      '恋愛タイプに関するメッセージ等を記載する。あああああああああああああああああああああああああああああああああああああああああああああああ。',
  },
};

export const showApp = () => <ResultSection {...props} />;

showApp.story = {
  name: 'ResultSection',
};
