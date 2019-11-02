import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withInfo);
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);
