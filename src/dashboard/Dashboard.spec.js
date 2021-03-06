import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard renders', () => {
  render(<Dashboard />);
});

test('Dashboard renders with gate', () => {
  const { getByText } = render(<Dashboard />);

  //Dashboard is rendering with the gate available
  getByText(/unlocked/i);
  getByText(/lock gate/i);
  getByText(/open/i);
  getByText(/close gate/i);
});
