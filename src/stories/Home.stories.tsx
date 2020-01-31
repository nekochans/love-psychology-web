import React from 'react';
import HomePage from '../features/home/Home';

export default {
  title: 'Home',
};

export const showApp = () => <HomePage />;

showApp.story = {
  name: 'Home',
};
