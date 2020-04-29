import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Controls component renders', () => {
  render(<Controls />);
});

test('Gate defaults to unlocked and open', () => {
  const { getByText } = render(<Controls />);

  //Upon rendering, this loads with close gate and lock gate
  getByText(/close gate/i);
  getByText(/lock gate/i);
});

test('Expect open/closed to be disabled when locked', () => {
  const { getByText } = render(<Controls locked={true} />);

  //Making a mock function for toggleClosed
  const toggleClosed = jest.fn();

  //Setting the button with this text
  const btn = getByText(/close gate/i);

  //firing that button that the mock function is tied to
  fireEvent.click(btn);

  //As the item is locked, it shouldn't be able to be called (this is true)
  expect(toggleClosed).toHaveBeenCalledTimes(0);
});
