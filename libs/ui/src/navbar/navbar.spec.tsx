import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar', () => {
  it('should render the logo', () => {
    render(<Navbar />);
    expect(screen.getByText('LibSci')).toBeTruthy();
  });
});
