import Home from '@pages/index';
import { render, screen } from '@utils/test-utils';
import React from 'react';

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Hello world/i);
    expect(heading).toBeInTheDocument();
  });
});
