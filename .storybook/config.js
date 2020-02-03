import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router'
import requireContext from 'require-context.macro';
import GlobalStyle from '../src/theme/globalStyle';

const WrapperRouter = storyFn => (
  <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
);

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(WrapperRouter);
addDecorator(s => <><GlobalStyle />{s()}</>);


// automatically import all files ending in *.stories.js
configure(requireContext('../src/stories', true, /\.stories\.tsx$/), module);
