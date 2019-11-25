import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router'

const WrapperRouter = storyFn => (
  <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
);

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(WrapperRouter);


// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);
