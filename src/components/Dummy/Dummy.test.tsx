import React from 'react';
import { render, screen } from '@testing-library/react';
import Dummy from './Dummy';

describe('Dummy', () => {
  test('renders "Hello World!" text', () => {
    render(<Dummy />);
    const helloWorldElement = screen.getByText(/Hello World!/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
});
