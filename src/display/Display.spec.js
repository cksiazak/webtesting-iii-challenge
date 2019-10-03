// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display component renders completely', () => {
  render(<Display />);
});

test("Display renders 'closed' upon closed prop being true", () => {
  const closed = true;

  const { getByText } = render(<Display closed={closed} />);
  getByText(/closed/i);
});

test("Display renders 'locked' upon locked prop being true", () => {
  const locked = true;

  const { getByText } = render(<Display locked={locked} />);
  getByText(/locked/i);
});