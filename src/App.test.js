import React from 'react';
import ReactDOM from 'react-dom';
import TopEvents from './TopEvents';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopEvents />, div);
});
