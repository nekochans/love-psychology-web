import React from 'react';
import Loading from '../components/Loading';

export default {
  title: 'Loading',
};

export const showApp = () => <Loading />;

showApp.story = {
  name: 'Loading',
};
