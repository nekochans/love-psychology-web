import React from 'react';
import App from '../app/App';

export default {
  title: 'App',
};

export const showApp = () => <App />;

showApp.story = {
  name: 'show app',
};
