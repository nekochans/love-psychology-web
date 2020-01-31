import React from 'react';
import NextButton from '../features/analysis/NextButton';

export default {
  title: 'NextButton',
};

export const showEnable = () => (
  <NextButton disabled={false}>次へ進む</NextButton>
);
export const showDisable = () => <NextButton disabled>次へ進む</NextButton>;

showEnable.story = {
  name: 'enable NextButton',
};

showDisable.story = {
  name: 'disable NextButton',
};
