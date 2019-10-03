// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

test('Display component renders completely', () => {
  render(<Display />);
});

test("Display renders 'closed' upon closed prop being true", () => {
  const closed = true;

  //This component has closed = true, thus should render 'closed'
  const { getByText } = render(<Display closed={closed} />);
  getByText(/closed/i);
});

test("Display renders 'locked' upon locked prop being true", () => {
  const locked = true;

  //This component has locked = true, thus should render 'locked'
  const { getByText } = render(<Display locked={locked} />);
  getByText(/locked/i);
});

it('Classname of "red-led" is chosed when closed/locked is true', () => {
  const component = render(<Display closed={true} locked={false} />);
  const disp = component.getByText(/closed/i);
  expect(disp).toHaveClass('red-led');
});

it('Classname of "green-led" is chosed when open is true', () => {
  const component = render(<Display closed={false} locked={false} />);
  const disp = component.getByText(/open/i);
  expect(disp).toHaveClass('green-led');
});
